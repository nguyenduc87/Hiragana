const questions = [
    { question: "ke đọc là gì?", choices: ["け", "こ", "き", "か"], answer: "け", hiragana: "け", userAnswer: null },
    { question: "a đọc là gì?", choices: ["あ", "い", "え", "か"], answer: "あ", hiragana: "あ", userAnswer: null },
    { question: "so đọc là gì?", choices: ["そ", "し", "す", "せ"], answer: "そ", hiragana: "そ", userAnswer: null },
    { question: "te đọc là gì?", choices: ["ち", "て", "つ", "た"], answer: "て", hiragana: "て", userAnswer: null },
    { question: "mu đọc là gì?", choices: ["ま", "む", "み", "も"], answer: "む", hiragana: "む", userAnswer: null },
    { question: "ha đọc là gì?", choices: ["は", "ひ", "ふ", "ほ"], answer: "は", hiragana: "は", userAnswer: null },
    { question: "ra đọc là gì?", choices: ["る", "ら", "れ", "ろ"], answer: "ら", hiragana: "ら", userAnswer: null },
    { question: "u đọc là gì?", choices: ["う", "え", "お", "い"], answer: "う", hiragana: "う", userAnswer: null },
    { question: "chi đọc là gì?", choices: ["た", "ち", "つ", "て"], answer: "ち", hiragana: "ち", userAnswer: null },
    { question: "yo đọc là gì?", choices: ["や", "ゆ", "よ", "を"], answer: "よ", hiragana: "よ", userAnswer: null },
    { question: "re đọc là gì?", choices: ["ら", "る", "れ", "ろ"], answer: "れ", hiragana: "れ", userAnswer: null },
    { question: "nu đọc là gì?", choices: ["ぬ", "ね", "の", "な"], answer: "ぬ", hiragana: "ぬ", userAnswer: null },
    { question: "ne đọc là gì?", choices: ["の", "ね", "ぬ", "な"], answer: "ね", hiragana: "ね", userAnswer: null },
    { question: "se đọc là gì?", choices: ["す", "せ", "し", "さ"], answer: "せ", hiragana: "せ", userAnswer: null },
    { question: "i đọc là gì?", choices: ["い", "え", "あ", "お"], answer: "い", hiragana: "い", userAnswer: null },
    { question: "no đọc là gì?", choices: ["ぬ", "ね", "の", "な"], answer: "の", hiragana: "の", userAnswer: null },
    { question: "hi đọc là gì?", choices: ["ふ", "は", "ひ", "へ"], answer: "ひ", hiragana: "ひ", userAnswer: null },
    { question: "ru đọc là gì?", choices: ["ろ", "ら", "る", "れ"], answer: "る", hiragana: "る", userAnswer: null },
    { question: "yo đọc là gì?", choices: ["よ", "ゆ", "や", "を"], answer: "よ", hiragana: "よ", userAnswer: null },
    { question: "he đọc là gì?", choices: ["へ", "ほ", "ひ", "は"], answer: "へ", hiragana: "へ", userAnswer: null },
    { question: "to đọc là gì?", choices: ["と", "て", "た", "ち"], answer: "と", hiragana: "と", userAnswer: null },
    { question: "na đọc là gì?", choices: ["な", "に", "ぬ", "ね"], answer: "な", hiragana: "な", userAnswer: null },
    { question: "sa đọc là gì?", choices: ["す", "し", "さ", "せ"], answer: "さ", hiragana: "さ", userAnswer: null },
    { question: "ya đọc là gì?", choices: ["よ", "ゆ", "や", "を"], answer: "や", hiragana: "や", userAnswer: null },
    { question: "fu đọc là gì?", choices: ["ふ", "へ", "ほ", "は"], answer: "ふ", hiragana: "ふ", userAnswer: null },
    { question: "me đọc là gì?", choices: ["ま", "み", "め", "も"], answer: "め", hiragana: "め", userAnswer: null },
    { question: "e đọc là gì?", choices: ["お", "う", "え", "い"], answer: "え", hiragana: "え", userAnswer: null },
    { question: "o đọc là gì?", choices: ["う", "え", "お", "あ"], answer: "お", hiragana: "お", userAnswer: null },
    { question: "mi đọc là gì?", choices: ["み", "ま", "め", "も"], answer: "み", hiragana: "み", userAnswer: null },
    { question: "ri đọc là gì?", choices: ["ら", "り", "る", "れ"], answer: "り", hiragana: "り", userAnswer: null },
    { question: "ko đọc là gì?", choices: ["け", "か", "き", "こ"], answer: "こ", hiragana: "こ", userAnswer: null },
    { question: "mo đọc là gì?", choices: ["ま", "み", "む", "も"], answer: "も", hiragana: "も", userAnswer: null },
    { question: "ro đọc là gì?", choices: ["れ", "る", "ら", "ろ"], answer: "ろ", hiragana: "ろ", userAnswer: null },
    { question: "ma đọc là gì?", choices: ["ま", "み", "む", "も"], answer: "ま", hiragana: "ま", userAnswer: null },
    { question: "wa đọc là gì?", choices: ["を", "ん", "わ", "よ"], answer: "わ", hiragana: "わ", userAnswer: null },
    { question: "n đọc là gì?", choices: ["ん", "わ", "を", "よ"], answer: "ん", hiragana: "ん", userAnswer: null },
    { question: "su đọc là gì?", choices: ["し", "す", "せ", "そ"], answer: "す", hiragana: "す", userAnswer: null },
    { question: "ta đọc là gì?", choices: ["ち", "つ", "て", "た"], answer: "た", hiragana: "た", userAnswer: null },
    { question: "ki đọc là gì?", choices: ["き", "か", "く", "こ"], answer: "き", hiragana: "き", userAnswer: null },
    { question: "ku đọc là gì?", choices: ["く", "き", "か", "こ"], answer: "く", hiragana: "く", userAnswer: null },
    { question: "tsu đọc là gì?", choices: ["ち", "つ", "て", "た"], answer: "つ", hiragana: "つ", userAnswer: null },
    { question: "se đọc là gì?", choices: ["さ", "す", "せ", "そ"], answer: "せ", hiragana: "せ", userAnswer: null },
    { question: "ne đọc là gì?", choices: ["ぬ", "ね", "の", "な"], answer: "ね", hiragana: "ね", userAnswer: null },
    { question: "ni đọc là gì?", choices: ["ぬ", "ね", "に", "な"], answer: "に", hiragana: "に", userAnswer: null },
    { question: "wo đọc là gì?", choices: ["を", "わ", "ん", "よ"], answer: "を", hiragana: "を", userAnswer: null },
    { question: "yo đọc là gì?", choices: ["ゆ", "や", "よ", "を"], answer: "よ", hiragana: "よ", userAnswer: null },

    { question: "ga đọc là gì?", choices: ["か", "が", "ぎ", "ご"], answer: "が", hiragana: "が", userAnswer: null },
    { question: "gi đọc là gì?", choices: ["ぎ", "げ", "ぐ", "が"], answer: "ぎ", hiragana: "ぎ", userAnswer: null },
    { question: "gu đọc là gì?", choices: ["げ", "ご", "ぐ", "が"], answer: "ぐ", hiragana: "ぐ", userAnswer: null },
    { question: "ge đọc là gì?", choices: ["げ", "ぎ", "が", "ぐ"], answer: "げ", hiragana: "げ", userAnswer: null },
    { question: "go đọc là gì?", choices: ["ご", "げ", "ぎ", "ぐ"], answer: "ご", hiragana: "ご", userAnswer: null },
    { question: "za đọc là gì?", choices: ["ざ", "じ", "ず", "ぜ"], answer: "ざ", hiragana: "ざ", userAnswer: null },
    { question: "ji đọc là gì?", choices: ["ず", "じ", "ざ", "ぜ"], answer: "じ", hiragana: "じ", userAnswer: null },
    { question: "zu đọc là gì?", choices: ["ず", "ぜ", "じ", "ざ"], answer: "ず", hiragana: "ず", userAnswer: null },
    { question: "ze đọc là gì?", choices: ["ぜ", "じ", "ず", "ざ"], answer: "ぜ", hiragana: "ぜ", userAnswer: null },
    { question: "zo đọc là gì?", choices: ["ぞ", "ぜ", "ず", "じ"], answer: "ぞ", hiragana: "ぞ", userAnswer: null },
    { question: "da đọc là gì?", choices: ["だ", "で", "ど", "ぢ"], answer: "だ", hiragana: "だ", userAnswer: null },
    { question: "de đọc là gì?", choices: ["で", "だ", "ぢ", "づ"], answer: "で", hiragana: "で", userAnswer: null },
    { question: "do đọc là gì?", choices: ["ど", "で", "だ", "づ"], answer: "ど", hiragana: "ど", userAnswer: null },
    { question: "ba đọc là gì?", choices: ["ぱ", "ば", "は", "び"], answer: "ば", hiragana: "ば", userAnswer: null },
    { question: "bi đọc là gì?", choices: ["び", "ば", "ぴ", "ぶ"], answer: "び", hiragana: "び", userAnswer: null },
    { question: "bu đọc là gì?", choices: ["ぶ", "ば", "び", "ぼ"], answer: "ぶ", hiragana: "ぶ", userAnswer: null },
    { question: "be đọc là gì?", choices: ["べ", "ぼ", "ば", "び"], answer: "べ", hiragana: "べ", userAnswer: null },
    { question: "bo đọc là gì?", choices: ["ぼ", "ば", "び", "ぶ"], answer: "ぼ", hiragana: "ぼ", userAnswer: null },
    { question: "pa đọc là gì?", choices: ["ぱ", "ぴ", "ぷ", "ぽ"], answer: "ぱ", hiragana: "ぱ", userAnswer: null },
    { question: "pi đọc là gì?", choices: ["ぱ", "ぴ", "ぷ", "ぺ"], answer: "ぴ", hiragana: "ぴ", userAnswer: null },
    { question: "pu đọc là gì?", choices: ["ぺ", "ぷ", "ぱ", "ぽ"], answer: "ぷ", hiragana: "ぷ", userAnswer: null },
    { question: "pe đọc là gì?", choices: ["ぺ", "ぽ", "ぱ", "ぴ"], answer: "ぺ", hiragana: "ぺ", userAnswer: null },
    { question: "po đọc là gì?", choices: ["ぽ", "ぱ", "ぴ", "ぷ"], answer: "ぽ", hiragana: "ぽ", userAnswer: null },

    { question: "kya đọc là gì?", choices: ["きゃ", "きょ", "きゅ", "か"], answer: "きゃ", hiragana: "きゃ", userAnswer: null },
    { question: "kyo đọc là gì?", choices: ["きゃ", "きゅ", "きょ", "こ"], answer: "きょ", hiragana: "きょ", userAnswer: null },
    { question: "shu đọc là gì?", choices: ["しょ", "しゅ", "しゃ", "す"], answer: "しゅ", hiragana: "しゅ", userAnswer: null },

    { question: "sha đọc là gì?", choices: ["しゃ", "しょ", "しゅ", "さ"], answer: "しゃ", hiragana: "しゃ", userAnswer: null },
    { question: "kyu đọc là gì?", choices: ["きゅ", "きょ", "きゃ", "く"], answer: "きゅ", hiragana: "きゅ", userAnswer: null },
    { question: "nyu đọc là gì?", choices: ["にゅ", "にゃ", "にょ", "ぬ"], answer: "にゅ", hiragana: "にゅ", userAnswer: null },

    { question: "cha đọc là gì?", choices: ["ちゃ", "ちょ", "ちゅ", "た"], answer: "ちゃ", hiragana: "ちゃ", userAnswer: null },
    { question: "sho đọc là gì?", choices: ["しょ", "しゃ", "しゅ", "そ"], answer: "しょ", hiragana: "しょ", userAnswer: null },
    { question: "nya đọc là gì?", choices: ["にゃ", "にゅ", "にょ", "な"], answer: "にゃ", hiragana: "にゃ", userAnswer: null },

    { question: "cho đọc là gì?", choices: ["ちょ", "ちゃ", "ちゅ", "と"], answer: "ちょ", hiragana: "ちょ", userAnswer: null },
    { question: "hya đọc là gì?", choices: ["ひゃ", "ひゅ", "ひょ", "は"], answer: "ひゃ", hiragana: "ひゃ", userAnswer: null },
    { question: "nyo đọc là gì?", choices: ["にょ", "にゅ", "にゃ", "の"], answer: "にょ", hiragana: "にょ", userAnswer: null },

    { question: "chu đọc là gì?", choices: ["ちょ", "ちゅ", "ちゃ", "つ"], answer: "ちゅ", hiragana: "ちゅ", userAnswer: null },
    { question: "hyu đọc là gì?", choices: ["ひゅ", "ひゃ", "ひょ", "ふ"], answer: "ひゅ", hiragana: "ひゅ", userAnswer: null },
    { question: "mya đọc là gì?", choices: ["みゃ", "みゅ", "みょ", "ま"], answer: "みゃ", hiragana: "みゃ", userAnswer: null },

    { question: "hyo đọc là gì?", choices: ["ひょ", "ひゃ", "ひゅ", "ほ"], answer: "ひょ", hiragana: "ひょ", userAnswer: null },
    { question: "myu đọc là gì?", choices: ["みゅ", "みゃ", "みょ", "む"], answer: "みゅ", hiragana: "みゅ", userAnswer: null },
    { question: "ryu đọc là gì?", choices: ["りゅ", "りゃ", "りょ", "る"], answer: "りゅ", hiragana: "りゅ", userAnswer: null },

    { question: "rya đọc là gì?", choices: ["りゃ", "りゅ", "りょ", "ら"], answer: "りゃ", hiragana: "りゃ", userAnswer: null },
    { question: "myo đọc là gì?", choices: ["みょ", "みゅ", "みゃ", "も"], answer: "みょ", hiragana: "みょ", userAnswer: null },
    { question: "gyo đọc là gì?", choices: ["ぎょ", "ぎゅ", "ぎゃ", "ご"], answer: "ぎょ", hiragana: "ぎょ", userAnswer: null },

    { question: "gya đọc là gì?", choices: ["ぎゃ", "ぎゅ", "ぎょ", "が"], answer: "ぎゃ", hiragana: "ぎゃ", userAnswer: null },
    { question: "ryo đọc là gì?", choices: ["りょ", "りゅ", "りゃ", "ろ"], answer: "りょ", hiragana: "りょ", userAnswer: null },
    { question: "gyu đọc là gì?", choices: ["ぎゅ", "ぎゃ", "ぎょ", "ぐ"], answer: "ぎゅ", hiragana: "ぎゅ", userAnswer: null },

    { question: "ja đọc là gì?", choices: ["じゃ", "じゅ", "じょ", "ざ"], answer: "じゃ", hiragana: "じゃ", userAnswer: null },
    { question: "byu đọc là gì?", choices: ["びゅ", "びゃ", "びょ", "ぶ"], answer: "びゅ", hiragana: "びゅ", userAnswer: null },
    { question: "ju đọc là gì?", choices: ["じゅ", "じゃ", "じょ", "ず"], answer: "じゅ", hiragana: "じゅ", userAnswer: null },

    { question: "jo đọc là gì?", choices: ["じょ", "じゅ", "じゃ", "ぞ"], answer: "じょ", hiragana: "じょ", userAnswer: null },
    { question: "bya đọc là gì?", choices: ["びゃ", "びゅ", "びょ", "ば"], answer: "びゃ", hiragana: "びゃ", userAnswer: null },
    { question: "pya đọc là gì?", choices: ["ぴゃ", "ぴゅ", "ぴょ", "ぱ"], answer: "ぴゃ", hiragana: "ぴゃ", userAnswer: null },

    { question: "byo đọc là gì?", choices: ["びょ", "びゅ", "びゃ", "ぼ"], answer: "びょ", hiragana: "びょ", userAnswer: null },
    { question: "pyu đọc là gì?", choices: ["ぴゅ", "ぴゃ", "ぴょ", "ぷ"], answer: "ぴゅ", hiragana: "ぴゅ", userAnswer: null },
    { question: "pyo đọc là gì?", choices: ["ぴょ", "ぴゅ", "ぴゃ", "ぽ"], answer: "ぴょ", hiragana: "ぴょ", userAnswer: null },
];

// Hàm xáo trộn mảng theo thuật toán Fisher-Yates
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Gọi hàm này trước khi hiển thị câu hỏi
shuffleQuestions(questions);

let currentQuestion = 0;
let timer;
let timeRemaining = 7;
const feedback = document.getElementById("feedback");
const warning = document.getElementById("warning");

function loadQuestion() {
    document.querySelector(".quiz-container").style.opacity = 0;
    feedback.style.display = "none";
    setTimeout(() => {
        const question = questions[currentQuestion];
        document.getElementById("question").textContent = question.question;
        const choicesList = document.getElementById("choices");
        choicesList.innerHTML = '';

        // Tạo bản sao của mảng đáp án rồi xáo trộn
        let shuffledChoices = [...question.choices];
        shuffleQuestions(shuffledChoices);

        shuffledChoices.forEach(choice => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.onclick = () => checkAnswer(choice, li);
            choicesList.appendChild(li);
        });

        timeRemaining = 7;
        document.getElementById("timer").textContent = timeRemaining;
        startTimer();

        document.getElementById("nextButton").style.display = "none";
        document.getElementById("submitButton").style.display = "none";
        warning.style.display = "none";

        document.querySelector(".quiz-container").style.opacity = 1;
    }, 300);
}

function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById("timer").textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            // Vô hiệu hóa tất cả các đáp án
            const choices = document.querySelectorAll("#choices li");
            choices.forEach(choice => {
                choice.onclick = null;
            });
            document.getElementById("nextButton").style.display = "inline-block";
            if (questions[currentQuestion].userAnswer === null) {
                warning.style.display = "block";
                return;
            }
        }
    }, 1000);
}

function checkAnswer(selected, liElement) {
    const question = questions[currentQuestion];
    const choices = document.querySelectorAll(".choices li");

    question.userAnswer = selected;
    choices.forEach(choice => {
        if (choice.textContent === question.answer) {
            choice.classList.add("correct");
        } else if (choice.textContent === selected) {
            choice.classList.add("incorrect");
        }
    });

    // choices.forEach(choice => {
    //     choice.onclick = null;
    // });

    clearInterval(timer);

    feedback.style.display = "block";
    feedback.innerHTML = `Phiên âm Hiragana: <strong>${question.hiragana}</strong>`;
    warning.style.display = "none";

    document.getElementById("nextButton").style.display = "inline-block";

    if (currentQuestion === questions.length - 1) {
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("submitButton").style.display = "inline-block";
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("submitButton").style.display = "inline-block";
    }
}

function submitQuiz() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unansweredQuestions = 0;

    questions.forEach(question => {
        if (question.userAnswer === question.answer) {
            correctAnswers++;
        } else if (question.userAnswer !== null) {
            incorrectAnswers++;
        } else {
            unansweredQuestions++;
        }
    });

    document.getElementById("totalQuestions").textContent = questions.length;
    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("incorrectAnswers").textContent = incorrectAnswers;
    document.getElementById("unansweredQuestions").textContent = unansweredQuestions;

    document.getElementById("nextButton").style.display = "none";
    document.getElementById("submitButton").style.display = "none";

    feedback.style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.opacity = 1;
}

function restartQuiz() {
    questions.forEach(question => question.userAnswer = null);
    currentQuestion = 0;
    loadQuestion();
    document.getElementById("result").style.display = "none";
}

loadQuestion();
