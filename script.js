// ==========================================
// KANJI FLASHCARD JLPT N4
// 42 KANJI - QUIZ + RANDOM + SCORE
// ==========================================

const defaultCards = [
    // KANJI AWAL
    {
        kanji: "駅", reading: "えき", meaning: "Stasiun",
        examples: [
            { word: "駅前", reading: "えきまえ", meaning: "Depan stasiun" },
            { word: "駅員", reading: "えきいん", meaning: "Petugas stasiun" }
        ]
    },
    {
        kanji: "毎", reading: "まい", meaning: "Setiap",
        examples: [
            { word: "毎朝", reading: "まいあさ", meaning: "Setiap pagi" },
            { word: "毎日", reading: "まいにち", meaning: "Setiap hari" },
            { word: "毎晩", reading: "まいばん", meaning: "Setiap malam" },
            { word: "毎週", reading: "まいしゅう", meaning: "Setiap minggu" }
        ]
    },

    // KANJI TEMPAT
    {
        kanji: "住", reading: "すむ", meaning: "Tinggal / bermukim",
        examples: [
            { word: "住む", reading: "すむ", meaning: "Tinggal" },
            { word: "住民", reading: "じゅうみん", meaning: "Penduduk" },
            { word: "住宅", reading: "じゅうたく", meaning: "Perumahan" }
        ]
    },
    {
        kanji: "所", reading: "ところ", meaning: "Tempat",
        examples: [
            { word: "所", reading: "ところ", meaning: "Tempat" },
            { word: "住所", reading: "じゅうしょ", meaning: "Alamat" },
            { word: "台所", reading: "だいどころ", meaning: "Dapur" },
            { word: "場所", reading: "ばしょ", meaning: "Lokasi / tempat" }
        ]
    },
    {
        kanji: "京", reading: "きょう・けい", meaning: "Kanji nama tempat",
        examples: [
            { word: "東京", reading: "とうきょう", meaning: "Tokyo" },
            { word: "京都", reading: "きょうと", meaning: "Kyoto" }
        ]
    },
    {
        kanji: "都", reading: "みやこ", meaning: "Kota besar / metropolitan",
        examples: [
            { word: "都", reading: "みやこ", meaning: "Kota besar" },
            { word: "東京都", reading: "とうきょうと", meaning: "Metropolitan Tokyo" },
            { word: "首都", reading: "しゅと", meaning: "Ibu kota" },
            { word: "都合", reading: "つごう", meaning: "Keadaan / kesempatan" }
        ]
    },
    {
        kanji: "府", reading: "ふ", meaning: "Prefektur perkotaan",
        examples: [
            { word: "京都府", reading: "きょうとふ", meaning: "Prefektur Kyoto" },
            { word: "大阪府", reading: "おおさかふ", meaning: "Prefektur Osaka" },
            { word: "政府", reading: "せいふ", meaning: "Pemerintahan" }
        ]
    },
    {
        kanji: "県", reading: "けん", meaning: "Prefektur",
        examples: [
            { word: "山口県", reading: "やまぐちけん", meaning: "Prefektur Yamaguchi" },
            { word: "県知事", reading: "けんちじ", meaning: "Gubernur prefektur" }
        ]
    },
    {
        kanji: "市", reading: "いち・し", meaning: "Pasar; bagian nama kota",
        examples: [
            { word: "市", reading: "いち", meaning: "Pasar" },
            { word: "京都市", reading: "きょうとし", meaning: "Kota Kyoto" },
            { word: "市長", reading: "しちょう", meaning: "Wali kota" },
            { word: "市場", reading: "いちば", meaning: "Pasar" }
        ]
    },
    {
        kanji: "区", reading: "く", meaning: "Distrik / wilayah",
        examples: [
            { word: "北区", reading: "きたく", meaning: "Distrik Kita" },
            { word: "区長", reading: "くちょう", meaning: "Kepala wilayah" },
            { word: "文京区", reading: "ぶんきょうく", meaning: "Distrik Bunkyo" }
        ]
    },
    {
        kanji: "町", reading: "まち", meaning: "Kota kecil / kawasan kota",
        examples: [
            { word: "町", reading: "まち", meaning: "Kota / kawasan kota" },
            { word: "下町", reading: "したまち", meaning: "Shitamachi" },
            { word: "町長", reading: "ちょうちょう", meaning: "Kepala kota kecil" }
        ]
    },
    {
        kanji: "村", reading: "むら", meaning: "Desa",
        examples: [
            { word: "村", reading: "むら", meaning: "Desa" },
            { word: "村人", reading: "むらびと", meaning: "Orang desa" },
            { word: "村長", reading: "そんちょう", meaning: "Kepala desa" },
            { word: "農村", reading: "のうそん", meaning: "Daerah pertanian" }
        ]
    },

    // KANJI SIFAT DAN KONDISI
    {
        kanji: "明", reading: "あかるい", meaning: "Terang; besok; penjelasan; penemuan",
        examples: [
            { word: "明るい", reading: "あかるい", meaning: "Terang" },
            { word: "明日", reading: "あした", meaning: "Besok" },
            { word: "説明", reading: "せつめい", meaning: "Penjelasan" },
            { word: "発明", reading: "はつめい", meaning: "Penemuan" }
        ]
    },
    {
        kanji: "暗", reading: "くらい", meaning: "Gelap; kode rahasia; petunjuk",
        examples: [
            { word: "暗い", reading: "くらい", meaning: "Gelap" },
            { word: "暗号", reading: "あんごう", meaning: "Kode rahasia" },
            { word: "暗示", reading: "あんじ", meaning: "Petunjuk / isyarat" }
        ]
    },
    {
        kanji: "遠", reading: "とおい", meaning: "Jauh; piknik; pendatang dari jauh",
        examples: [
            { word: "遠い", reading: "とおい", meaning: "Jauh" },
            { word: "遠足", reading: "えんそく", meaning: "Piknik / tamasya" },
            { word: "遠来", reading: "えんらい", meaning: "Kedatangan dari jauh" },
            { word: "遠近", reading: "えんきん", meaning: "Jauh dan dekat" }
        ]
    },
    {
        kanji: "近", reading: "ちかい", meaning: "Dekat; tetangga; akhir-akhir ini",
        examples: [
            { word: "近い", reading: "ちかい", meaning: "Dekat" },
            { word: "近所", reading: "きんじょ", meaning: "Lingkungan sekitar" },
            { word: "最近", reading: "さいきん", meaning: "Akhir-akhir ini" },
            { word: "近道", reading: "ちかみち", meaning: "Jalan pintas" }
        ]
    },
    {
        kanji: "強", reading: "つよい", meaning: "Kuat; belajar; angin kencang",
        examples: [
            { word: "強い", reading: "つよい", meaning: "Kuat" },
            { word: "勉強", reading: "べんきょう", meaning: "Belajar" },
            { word: "強風", reading: "きょうふう", meaning: "Angin kencang" }
        ]
    },
    {
        kanji: "弱", reading: "よわい", meaning: "Lemah; kelemahan; fisik lemah",
        examples: [
            { word: "弱い", reading: "よわい", meaning: "Lemah" },
            { word: "強弱", reading: "きょうじゃく", meaning: "Kuat dan lemah" },
            { word: "弱点", reading: "じゃくてん", meaning: "Kelemahan" },
            { word: "病弱", reading: "びょうじゃく", meaning: "Fisik lemah" }
        ]
    },
    {
        kanji: "重", reading: "おもい", meaning: "Berat; penting; berat badan",
        examples: [
            { word: "重い", reading: "おもい", meaning: "Berat" },
            { word: "重大", reading: "じゅうだい", meaning: "Penting / serius" },
            { word: "体重", reading: "たいじゅう", meaning: "Berat badan" },
            { word: "重点", reading: "じゅうてん", meaning: "Poin penting" }
        ]
    },
    {
        kanji: "軽", reading: "かるい", meaning: "Ringan; makanan ringan; ceroboh",
        examples: [
            { word: "軽い", reading: "かるい", meaning: "Ringan" },
            { word: "軽食", reading: "けいしょく", meaning: "Makanan ringan" },
            { word: "軽率", reading: "けいそつ", meaning: "Ceroboh / gegabah" }
        ]
    },
    {
        kanji: "太", reading: "ふとい", meaning: "Gemuk / tebal; matahari; Samudra Pasifik",
        examples: [
            { word: "太い", reading: "ふとい", meaning: "Gemuk / tebal" },
            { word: "太陽", reading: "たいよう", meaning: "Matahari" },
            { word: "太平洋", reading: "たいへいよう", meaning: "Samudra Pasifik" },
            { word: "太鼓", reading: "たいこ", meaning: "Gendang" }
        ]
    },
    {
        kanji: "細", reading: "ほそい", meaning: "Kurus / ramping; rinci; teliti",
        examples: [
            { word: "細い", reading: "ほそい", meaning: "Kurus / ramping" },
            { word: "細かい", reading: "こまかい", meaning: "Rinci / kecil" },
            { word: "細工", reading: "さいく", meaning: "Kerajinan" },
            { word: "細心", reading: "さいしん", meaning: "Sangat teliti" }
        ]
    },

    // 20 KANJI BARU - FILE 3 DAN 4
    {
        kanji: "特", reading: "とく", meaning: "Khusus, terutama",
        examples: [
            { word: "特に", reading: "とくに", meaning: "Terutama" },
            { word: "特別", reading: "とくべつ", meaning: "Khusus" },
            { word: "特急", reading: "とっきゅう", meaning: "Kereta ekspres" },
            { word: "特価", reading: "とっか", meaning: "Harga khusus" }
        ]
    },
    {
        kanji: "別", reading: "べつ", meaning: "Terpisah, masing-masing",
        examples: [
            { word: "別れる", reading: "わかれる", meaning: "Berpisah" },
            { word: "別々", reading: "べつべつ", meaning: "Masing-masing" },
            { word: "区別", reading: "くべつ", meaning: "Pembedaan" },
            { word: "分別", reading: "ぶんべつ", meaning: "Pemilahan" }
        ]
    },
    {
        kanji: "有", reading: "ある", meaning: "Ada, punya",
        examples: [
            { word: "有る", reading: "ある", meaning: "Ada" },
            { word: "有名", reading: "ゆうめい", meaning: "Terkenal" },
            { word: "有力", reading: "ゆうりょく", meaning: "Berpengaruh" },
            { word: "有能", reading: "ゆうのう", meaning: "Cakap, mampu" }
        ]
    },
    {
        kanji: "便", reading: "たより", meaning: "Surat, pesan",
        examples: [
            { word: "便り", reading: "たより", meaning: "Kabar" },
            { word: "便箋", reading: "びんせん", meaning: "Kertas surat" },
            { word: "便覧", reading: "べんらん", meaning: "Buku panduan" },
            { word: "船便", reading: "ふなびん", meaning: "Pos laut" }
        ]
    },
    {
        kanji: "利", reading: "り", meaning: "Keuntungan, manfaat",
        examples: [
            { word: "便利", reading: "べんり", meaning: "Praktis" },
            { word: "利用", reading: "りよう", meaning: "Penggunaan" },
            { word: "利子", reading: "りし", meaning: "Bunga uang" },
            { word: "有利", reading: "ゆうり", meaning: "Menguntungkan" }
        ]
    },
    {
        kanji: "不", reading: "ふ", meaning: "Tidak, kekurangan",
        examples: [
            { word: "不便", reading: "ふべん", meaning: "Tidak praktis" },
            { word: "不足", reading: "ふそく", meaning: "Kekurangan" },
            { word: "不安", reading: "ふあん", meaning: "Khawatir" },
            { word: "不運", reading: "ふうん", meaning: "Nasib buruk" }
        ]
    },
    {
        kanji: "切", reading: "きる", meaning: "Memotong",
        examples: [
            { word: "切る", reading: "きる", meaning: "Memotong" },
            { word: "切手", reading: "きって", meaning: "Perangko" },
            { word: "大切", reading: "たいせつ", meaning: "Penting" },
            { word: "親切", reading: "しんせつ", meaning: "Ramah, baik hati" }
        ]
    },
    {
        kanji: "元", reading: "もと", meaning: "Asal usul",
        examples: [
            { word: "元", reading: "もと", meaning: "Asal" },
            { word: "元日", reading: "がんじつ", meaning: "Hari tahun baru" },
            { word: "元気", reading: "げんき", meaning: "Sehat, bersemangat" }
        ]
    },
    {
        kanji: "好", reading: "すき", meaning: "Suka",
        examples: [
            { word: "好き", reading: "すき", meaning: "Suka" },
            { word: "好意", reading: "こうい", meaning: "Niat baik" },
            { word: "好物", reading: "こうぶつ", meaning: "Makanan kesukaan" },
            { word: "好奇心", reading: "こうきしん", meaning: "Rasa ingin tahu" }
        ]
    },
    {
        kanji: "急", reading: "いそぐ", meaning: "Terburu-buru",
        examples: [
            { word: "急ぐ", reading: "いそぐ", meaning: "Bergegas" },
            { word: "急に", reading: "きゅうに", meaning: "Tiba-tiba" },
            { word: "救急車", reading: "きゅうきゅうしゃ", meaning: "Ambulans" },
            { word: "急用", reading: "きゅうよう", meaning: "Urusan mendadak" }
        ]
    },
    {
        kanji: "低", reading: "ひくい", meaning: "Rendah",
        examples: [
            { word: "低い", reading: "ひくい", meaning: "Rendah" },
            { word: "低下する", reading: "ていかする", meaning: "Menurun" },
            { word: "低気圧", reading: "ていきあつ", meaning: "Tekanan rendah" },
            { word: "背が低い", reading: "せがひくい", meaning: "Bertubuh pendek" }
        ]
    },
    {
        kanji: "広", reading: "ひろい", meaning: "Luas",
        examples: [
            { word: "広い", reading: "ひろい", meaning: "Luas" },
            { word: "広場", reading: "ひろば", meaning: "Lapangan terbuka" },
            { word: "広島", reading: "ひろしま", meaning: "Hiroshima" },
            { word: "広さ", reading: "ひろさ", meaning: "Luasnya" }
        ]
    },
    {
        kanji: "短", reading: "みじかい", meaning: "Pendek, singkat",
        examples: [
            { word: "短い", reading: "みじかい", meaning: "Pendek" },
            { word: "短時間", reading: "たんじかん", meaning: "Waktu singkat" },
            { word: "短所", reading: "たんしょ", meaning: "Kelemahan" },
            { word: "短期", reading: "たんき", meaning: "Jangka pendek" }
        ]
    },
    {
        kanji: "良", reading: "よい", meaning: "Baik",
        examples: [
            { word: "良い", reading: "よい", meaning: "Baik" },
            { word: "良心", reading: "りょうしん", meaning: "Hati nurani" },
            { word: "改良", reading: "かいりょう", meaning: "Perbaikan" }
        ]
    },
    {
        kanji: "悪", reading: "わるい", meaning: "Buruk, jahat",
        examples: [
            { word: "悪い", reading: "わるい", meaning: "Buruk" },
            { word: "悪人", reading: "あくにん", meaning: "Orang jahat" },
            { word: "悪戯", reading: "いたずら", meaning: "Kenakalan" },
            { word: "悪化する", reading: "あっかする", meaning: "Memburuk" }
        ]
    },
    {
        kanji: "正", reading: "ただしい", meaning: "Benar, tepat",
        examples: [
            { word: "正しい", reading: "ただしい", meaning: "Benar" },
            { word: "正月", reading: "しょうがつ", meaning: "Tahun baru" },
            { word: "正門", reading: "せいもん", meaning: "Gerbang utama" },
            { word: "正解", reading: "せいかい", meaning: "Jawaban benar" }
        ]
    },
    {
        kanji: "変", reading: "かわる", meaning: "Berubah, aneh",
        examples: [
            { word: "変わる", reading: "かわる", meaning: "Berubah" },
            { word: "変な", reading: "へんな", meaning: "Aneh" },
            { word: "大変な", reading: "たいへんな", meaning: "Sulit, berat" },
            { word: "変化", reading: "へんか", meaning: "Perubahan" }
        ]
    },
    {
        kanji: "赤", reading: "あかい", meaning: "Merah",
        examples: [
            { word: "赤い", reading: "あかい", meaning: "Merah" },
            { word: "赤ちゃん", reading: "あかちゃん", meaning: "Bayi" },
            { word: "赤信号", reading: "あかしんごう", meaning: "Lampu merah" },
            { word: "赤道", reading: "せきどう", meaning: "Khatulistiwa" }
        ]
    },
    {
        kanji: "青", reading: "あおい", meaning: "Biru",
        examples: [
            { word: "青い", reading: "あおい", meaning: "Biru" },
            { word: "青空", reading: "あおぞら", meaning: "Langit biru" },
            { word: "青春", reading: "せいしゅん", meaning: "Masa muda" },
            { word: "青年", reading: "せいねん", meaning: "Pemuda" }
        ]
    },
    {
        kanji: "黒", reading: "くろい", meaning: "Hitam",
        examples: [
            { word: "黒い", reading: "くろい", meaning: "Hitam" },
            { word: "真っ黒", reading: "まっくろ", meaning: "Hitam pekat" },
            { word: "黒板", reading: "こくばん", meaning: "Papan tulis" },
            { word: "黒子", reading: "ほくろ", meaning: "Tahi lalat" }
        ]
    }
];

// ==========================================
// FUNGSI ACAK ARRAY
// ==========================================

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// ==========================================
// GABUNGKAN DATA LAMA DAN BARU
// ==========================================

function loadCards() {
    let savedCards = [];

    try {
        savedCards = JSON.parse(localStorage.getItem("kanjiCards")) || [];

        if (!Array.isArray(savedCards)) {
            savedCards = [];
        }
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

// ==========================================
// DATA DAN STATUS QUIZ
// ==========================================

let cards = shuffleArray(loadCards());

let currentIndex = 0;
let isFlipped = false;
let hasAnswered = false;
let correctAnswer = "";

let correctCount = 0;
let wrongCount = 0;

// ==========================================
// HUBUNGKAN HTML
// ==========================================

const flashcard = document.getElementById("flashcard");
const cardContent = document.getElementById("cardContent");

const flipBtn = document.getElementById("flipBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const addBtn = document.getElementById("addBtn");

const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");

// ==========================================
// FUNGSI AMAN UNTUK MENAMPILKAN TEKS
// ==========================================

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

// ==========================================
// SIMPAN DATA KANJI
// ==========================================

function saveCards() {
    localStorage.setItem("kanjiCards", JSON.stringify(cards));
}

// ==========================================
// AMBIL CARA BACA KANJI
// ==========================================

function getQuizReading(card) {
    return String(card.reading || "")
        .split(/[・/、]/)[0]
        .trim();
}

// ==========================================
// BUAT PILIHAN JAWABAN ACAK
// ==========================================

function createQuiz() {
    const card = cards[currentIndex];

    correctAnswer = getQuizReading(card);

    const otherReadings = cards
        .filter(item => item.kanji !== card.kanji)
        .map(item => getQuizReading(item))
        .filter(reading => reading && reading !== correctAnswer);

    const uniqueReadings = [...new Set(otherReadings)];
    const shuffledWrongAnswers = shuffleArray(uniqueReadings);
    const wrongAnswers = shuffledWrongAnswers.slice(0, 3);

    let choices = [correctAnswer, ...wrongAnswers];
    choices = shuffleArray(choices);

    quizOptions.innerHTML = choices.map(choice => `
        <button class="quiz-option" data-answer="${escapeHTML(choice)}">
            ${escapeHTML(choice)}
        </button>
    `).join("");

    quizOptions.querySelectorAll(".quiz-option").forEach(button => {
        button.addEventListener("click", () => {
            checkAnswer(button.dataset.answer);
        });
    });

    quizFeedback.textContent = "";
    quizFeedback.className = "";

    hasAnswered = false;
    isFlipped = false;

    flipBtn.disabled = true;
    flipBtn.textContent = "Lihat Arti";
}

// ==========================================
// PERIKSA JAWABAN
// ==========================================

function checkAnswer(answer) {
    if (hasAnswered) return;

    hasAnswered = true;

    const isCorrect = answer === correctAnswer;
    const buttons = quizOptions.querySelectorAll(".quiz-option");

    buttons.forEach(button => {
        button.disabled = true;

        if (button.dataset.answer === correctAnswer) {
            button.classList.add("correct");
        }

        if (button.dataset.answer === answer && !isCorrect) {
            button.classList.add("wrong");
        }
    });

    if (isCorrect) {
        correctCount++;
        quizFeedback.textContent = "Benar! すごい！ 🎉";
        quizFeedback.className = "correct-text";
    } else {
        wrongCount++;
        quizFeedback.textContent =
            `Belum tepat. Jawaban yang benar adalah ${correctAnswer}`;
        quizFeedback.className = "wrong-text";
    }

    flipBtn.disabled = false;
    flipBtn.textContent = "Lihat Arti";

    updateScore();
}

// ==========================================
// UPDATE SKOR
// ==========================================

function updateScore() {
    document.getElementById("score").textContent =
        `Benar: ${correctCount} | Salah: ${wrongCount}`;
}

// ==========================================
// TAMPILKAN FLASHCARD
// ==========================================

function showCard() {
    if (!cards.length) {
        cardContent.innerHTML = "<h2>Belum ada Kanji</h2>";
        quizOptions.innerHTML = "";
        document.getElementById("progress").textContent = "0 Kanji";
        flipBtn.disabled = true;
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
            <p>Jawab kuis terlebih dahulu</p>
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
    if (!cards.length || !hasAnswered) return;

    isFlipped = !isFlipped;
    showCard();
}

flashcard.addEventListener("click", flipCard);
flipBtn.addEventListener("click", flipCard);

// ==========================================
// PINDAH KANJI
// ==========================================

function changeCard(direction) {
    if (!cards.length) return;

    currentIndex =
        (currentIndex + direction + cards.length) % cards.length;

    isFlipped = false;

    showCard();
    createQuiz();
}

prevBtn.addEventListener("click", () => changeCard(-1));
nextBtn.addEventListener("click", () => changeCard(1));

// ==========================================
// TAMBAH ATAU UPDATE KANJI
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

    ["newKanji", "newReading", "newMeaning", "newExamples"]
        .forEach(id => {
            document.getElementById(id).value = "";
        });

    isFlipped = false;

    showCard();
    createQuiz();
});

// ==========================================
// MULAI WEBSITE
// ==========================================

saveCards();
showCard();
createQuiz();
updateScore();
