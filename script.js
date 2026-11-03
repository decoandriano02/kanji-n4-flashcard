
// ==========================================
// KANJI FLASHCARD JLPT N4
// Paket 1 dan 2
// ==========================================

const defaultCards = [

    // KARTU AWAL
    {
        kanji: "駅",
        reading: "えき",
        meaning: "Stasiun",
        examples: [
            { word: "駅前", reading: "えきまえ", meaning: "Depan stasiun" },
            { word: "駅員", reading: "えきいん", meaning: "Petugas stasiun" }
        ]
    },
    {
        kanji: "毎",
        reading: "まい",
        meaning: "Setiap",
        examples: [
            { word: "毎朝", reading: "まいあさ", meaning: "Setiap pagi" },
            { word: "毎日", reading: "まいにち", meaning: "Setiap hari" },
            { word: "毎晩", reading: "まいばん", meaning: "Setiap malam" },
            { word: "毎週", reading: "まいしゅう", meaning: "Setiap minggu" }
        ]
    },

    // ==========================================
    // FILE 1 - KANJI TEMPAT
    // ==========================================

    {
        kanji: "住",
        reading: "すむ",
        meaning: "Tinggal / bermukim",
        examples: [
            { word: "住む", reading: "すむ", meaning: "Tinggal" },
            { word: "住民", reading: "じゅうみん", meaning: "Penduduk" },
            { word: "住宅", reading: "じゅうたく", meaning: "Perumahan" }
        ]
    },
    {
        kanji: "所",
        reading: "ところ",
        meaning: "Tempat",
        examples: [
            { word: "所", reading: "ところ", meaning: "Tempat" },
            { word: "住所", reading: "じゅうしょ", meaning: "Alamat" },
            { word: "台所", reading: "だいどころ", meaning: "Dapur" },
            { word: "場所", reading: "ばしょ", meaning: "Lokasi / tempat" }
        ]
    },
    {
        kanji: "京",
        reading: "きょう・けい",
        meaning: "Kanji yang digunakan pada nama tempat",
        examples: [
            { word: "東京", reading: "とうきょう", meaning: "Tokyo" },
            { word: "京都", reading: "きょうと", meaning: "Kyoto" }
        ]
    },
    {
        kanji: "都",
        reading: "みやこ",
        meaning: "Kota besar / metropolitan",
        examples: [
            { word: "都", reading: "みやこ", meaning: "Kota besar" },
            { word: "東京都", reading: "とうきょうと", meaning: "Metropolitan Tokyo" },
            { word: "首都", reading: "しゅと", meaning: "Ibu kota" },
            { word: "都合", reading: "つごう", meaning: "Keadaan / kesempatan" }
        ]
    },
    {
        kanji: "府",
        reading: "ふ",
        meaning: "Prefektur perkotaan",
        examples: [
            { word: "京都府", reading: "きょうとふ", meaning: "Prefektur Kyoto" },
            { word: "大阪府", reading: "おおさかふ", meaning: "Prefektur Osaka" },
            { word: "政府", reading: "せいふ", meaning: "Pemerintahan" }
        ]
    },
    {
        kanji: "県",
        reading: "けん",
        meaning: "Prefektur",
        examples: [
            { word: "山口県", reading: "やまぐちけん", meaning: "Prefektur Yamaguchi" },
            { word: "県知事", reading: "けんちじ", meaning: "Gubernur prefektur" }
        ]
    },
    {
        kanji: "市",
        reading: "いち・し",
        meaning: "Pasar; digunakan juga pada nama kota",
        examples: [
            { word: "市", reading: "いち", meaning: "Pasar" },
            { word: "京都市", reading: "きょうとし", meaning: "Kota Kyoto" },
            { word: "市長", reading: "しちょう", meaning: "Wali kota" },
            { word: "市場", reading: "いちば", meaning: "Pasar" }
        ]
    },
    {
        kanji: "区",
        reading: "く",
        meaning: "Distrik / wilayah",
        examples: [
            { word: "北区", reading: "きたく", meaning: "Distrik Kita" },
            { word: "区長", reading: "くちょう", meaning: "Kepala wilayah" },
            { word: "文京区", reading: "ぶんきょうく", meaning: "Distrik Bunkyo" }
        ]
    },
    {
        kanji: "町",
        reading: "まち",
        meaning: "Kota kecil / kawasan kota",
        examples: [
            { word: "町", reading: "まち", meaning: "Kota / kawasan kota" },
            { word: "下町", reading: "したまち", meaning: "Shitamachi" },
            { word: "町長", reading: "ちょうちょう", meaning: "Kepala kota kecil" }
        ]
    },
    {
        kanji: "村",
        reading: "むら",
        meaning: "Desa",
        examples: [
            { word: "村", reading: "むら", meaning: "Desa" },
            { word: "村人", reading: "むらびと", meaning: "Orang desa" },
            { word: "村長", reading: "そんちょう", meaning: "Kepala desa" },
            { word: "農村", reading: "のうそん", meaning: "Daerah pertanian" }
        ]
    },

    // ==========================================
    // FILE 2 - KANJI SIFAT DAN KONDISI
    // ==========================================

    {
        kanji: "明",
        reading: "あかるい",
        meaning: "Terang; besok; penjelasan; penemuan",
        examples: [
            { word: "明るい", reading: "あかるい", meaning: "Terang" },
            { word: "明日", reading: "あした", meaning: "Besok" },
            { word: "説明", reading: "せつめい", meaning: "Penjelasan" },
            { word: "発明", reading: "はつめい", meaning: "Penemuan" }
        ]
    },
    {
        kanji: "暗",
        reading: "くらい",
        meaning: "Gelap; kode rahasia; petunjuk",
        examples: [
            { word: "暗い", reading: "くらい", meaning: "Gelap" },
            { word: "暗号", reading: "あんごう", meaning: "Kode rahasia" },
            { word: "暗示", reading: "あんじ", meaning: "Petunjuk / isyarat" }
        ]
    },
    {
        kanji: "遠",
        reading: "とおい",
        meaning: "Jauh; piknik; pendatang dari jauh",
        examples: [
            { word: "遠い", reading: "とおい", meaning: "Jauh" },
            { word: "遠足", reading: "えんそく", meaning: "Piknik / tamasya" },
            { word: "遠来", reading: "えんらい", meaning: "Kedatangan dari jauh" },
            { word: "遠近", reading: "えんきん", meaning: "Jauh dan dekat" }
        ]
    },
    {
        kanji: "近",
        reading: "ちかい",
        meaning: "Dekat; tetangga; akhir-akhir ini",
        examples: [
            { word: "近い", reading: "ちかい", meaning: "Dekat" },
            { word: "近所", reading: "きんじょ", meaning: "Lingkungan sekitar" },
            { word: "最近", reading: "さいきん", meaning: "Akhir-akhir ini" },
            { word: "近道", reading: "ちかみち", meaning: "Jalan pintas" }
        ]
    },
    {
        kanji: "強",
        reading: "つよい",
        meaning: "Kuat; belajar; angin kencang",
        examples: [
            { word: "強い", reading: "つよい", meaning: "Kuat" },
            { word: "勉強", reading: "べんきょう", meaning: "Belajar" },
            { word: "強風", reading: "きょうふう", meaning: "Angin kencang" }
        ]
    },
    {
        kanji: "弱",
        reading: "よわい",
        meaning: "Lemah; kelemahan; fisik lemah",
        examples: [
            { word: "弱い", reading: "よわい", meaning: "Lemah" },
            { word: "強弱", reading: "きょうじゃく", meaning: "Kuat dan lemah" },
            { word: "弱点", reading: "じゃくてん", meaning: "Kelemahan" },
            { word: "病弱", reading: "びょうじゃく", meaning: "Fisik lemah" }
        ]
    },
    {
        kanji: "重",
        reading: "おもい",
        meaning: "Berat; penting; berat badan",
        examples: [
            { word: "重い", reading: "おもい", meaning: "Berat" },
            { word: "重大", reading: "じゅうだい", meaning: "Penting / serius" },
            { word: "体重", reading: "たいじゅう", meaning: "Berat badan" },
            { word: "重点", reading: "じゅうてん", meaning: "Poin penting" }
        ]
    },
    {
        kanji: "軽",
        reading: "かるい",
        meaning: "Ringan; makanan ringan; ceroboh",
        examples: [
            { word: "軽い", reading: "かるい", meaning: "Ringan" },
            { word: "軽食", reading: "けいしょく", meaning: "Makanan ringan" },
            { word: "軽率", reading: "けいそつ", meaning: "Ceroboh / gegabah" }
        ]
    },
    {
        kanji: "太",
        reading: "ふとい",
        meaning: "Gemuk / tebal; matahari; Samudra Pasifik",
        examples: [
            { word: "太い", reading: "ふとい", meaning: "Gemuk / tebal" },
            { word: "太陽", reading: "たいよう", meaning: "Matahari" },
            { word: "太平洋", reading: "たいへいよう", meaning: "Samudra Pasifik" },
            { word: "太鼓", reading: "たいこ", meaning: "Gendang" }
        ]
    },
    {
        kanji: "細",
        reading: "ほそい",
        meaning: "Kurus / ramping; rinci; teliti",
        examples: [
            { word: "細い", reading: "ほそい", meaning: "Kurus / ramping" },
            { word: "細かい", reading: "こまかい", meaning: "Rinci / kecil" },
            { word: "細工", reading: "さいく", meaning: "Kerajinan" },
            { word: "細心", reading: "さいしん", meaning: "Sangat teliti" }
        ]
    }
];

// ==========================================
// GABUNGKAN DATA LAMA DAN BARU
// ==========================================

function loadCards() {
    let savedCards = [];

    try {
        savedCards = JSON.parse(localStorage.getItem("kanjiCards")) || [];
        if (!Array.isArray(savedCards)) savedCards = [];
    } catch (error) {
        savedCards = [];
    }

    const merged = new Map();

    defaultCards.forEach(card => {
        merged.set(card.kanji, card);
    });

    savedCards.forEach(saved => {
        if (!saved || !saved.kanji) return;

        const existing = merged.get(saved.kanji);

        if (existing) {
            merged.set(saved.kanji, {
                ...existing,
                ...saved,
                reading: saved.reading || existing.reading,
                meaning: saved.meaning || existing.meaning,
                examples:
                    Array.isArray(saved.examples) && saved.examples.length
                        ? saved.examples
                        : existing.examples
            });
        } else {
            merged.set(saved.kanji, saved);
        }
    });

    return Array.from(merged.values());
}

let cards = loadCards();
let currentIndex = 0;
let isFlipped = false;

// ==========================================
// HUBUNGKAN HTML
// ==========================================

const flashcard = document.getElementById("flashcard");
const cardContent = document.getElementById("cardContent");
const flipBtn = document.getElementById("flipBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const addBtn = document.getElementById("addBtn");

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function saveCards() {
    localStorage.setItem("kanjiCards", JSON.stringify(cards));
}

// ==========================================
// TAMPILKAN FLASHCARD
// ==========================================

function showCard() {
    if (!cards.length) {
        cardContent.innerHTML = "<h2>Belum ada Kanji</h2>";
        document.getElementById("progress").textContent = "0 Kanji";
        return;
    }

    const card = cards[currentIndex];

    if (isFlipped) {
        const examples = (card.examples || []).map(item => `
            <div style="text-align:left; margin:12px 0;">
                <strong>${escapeHTML(item.word)}</strong>
                <span>（${escapeHTML(item.reading)}）</span>
                <br>
                <small>${escapeHTML(item.meaning)}</small>
            </div>
        `).join("");

        cardContent.innerHTML = `
            <p class="label">CARA BACA, ARTI DAN KOSAKATA</p>
            <h2>${escapeHTML(card.reading || "-")}</h2>
            <h3>${escapeHTML(card.meaning || "-")}</h3>
            <hr style="margin:15px 0;">
            <h3>Contoh kosakata</h3>
            ${examples || "<p>Belum ada kosakata tambahan.</p>"}
        `;

        flipBtn.textContent = "Lihat Kanji";

    } else {
        cardContent.innerHTML = `
            <p class="label">KANJI</p>
            <h1 id="kanji">${escapeHTML(card.kanji)}</h1>
            <p>Klik kartu untuk melihat arti</p>
        `;

        flipBtn.textContent = "Lihat Arti";
    }

    document.getElementById("progress").textContent =
        `${currentIndex + 1} / ${cards.length} Kanji`;
}

// ==========================================
// BALIK KARTU
// ==========================================

function flipCard() {
    if (!cards.length) return;

    isFlipped = !isFlipped;
    showCard();
}

flashcard.addEventListener("click", flipCard);
flipBtn.addEventListener("click", flipCard);

// ==========================================
// TOMBOL SEBELUMNYA DAN SELANJUTNYA
// ==========================================

prevBtn.addEventListener("click", () => {
    if (!cards.length) return;

    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    isFlipped = false;
    showCard();
});

nextBtn.addEventListener("click", () => {
    if (!cards.length) return;

    currentIndex = (currentIndex + 1) % cards.length;
    isFlipped = false;
    showCard();
});

// ==========================================
// TAMBAH KANJI BARU
// ==========================================

addBtn.addEventListener("click", () => {

    const kanji = document.getElementById("newKanji").value.trim();
    const reading = document.getElementById("newReading").value.trim();
    const meaning = document.getElementById("newMeaning").value.trim();
    const rawExamples = document.getElementById("newExamples").value.trim();

    if (!kanji || !reading || !meaning) {
        alert("Lengkapi Kanji, cara baca, dan artinya!");
        return;
    }

    const examples = rawExamples
        .split("\n")
        .filter(line => line.trim())
        .map(line => {
            const parts = line.split("|").map(x => x.trim());

            return {
                word: parts[0] || "",
                reading: parts[1] || "",
                meaning: parts[2] || ""
            };
        });

    const existingIndex = cards.findIndex(card => card.kanji === kanji);

    const newCard = {
        kanji,
        reading,
        meaning,
        examples
    };

    if (existingIndex >= 0) {
        cards[existingIndex] = newCard;
        currentIndex = existingIndex;
        alert("Kanji berhasil diperbarui!");
    } else {
        cards.push(newCard);
        currentIndex = cards.length - 1;
        alert("Kanji berhasil ditambahkan!");
    }

    saveCards();

    isFlipped = false;

    ["newKanji", "newReading", "newMeaning", "newExamples"]
        .forEach(id => {
            document.getElementById(id).value = "";
        });

    showCard();
});

// ==========================================
// SIMPAN DAN MULAI
// ==========================================

saveCards();
showCard();
