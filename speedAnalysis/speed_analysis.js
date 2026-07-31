let testText = "Швидка коричнева лисиця стрибає через ледачого пса.";
let startTime, endTime;

function startTest() {
    // Встановіть текст для тесту
    document.getElementById("inputText").value = testText;

    // Скидання вводу користувача та виводу
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";

    // Запустіть таймер
    startTime = new Date().getTime();
}

function endTest() {
    endTime = new Date().getTime();

    // Вимкнення введення користувача
    document.getElementById("userInput").readOnly = true;

    // Обчислення часу, що минув, та слів за хвилину (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // в секундах
    var userTypedText = document.getElementById("userInput").value;

    // Розділити текст за допомогою регулярного виразу для правильного підрахунку слів
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Значення за замовчуванням

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Відображення результатів
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Результати тесту на друк:</h2>" +
        "<p>Кількість символів: " + userTypedText.split("").length + "</p>" +
        "<p>Набрано слів: " + typedWords + "</p>" +
        "<p>Час, що минув: " + timeElapsed.toFixed(2) + " секунд</p>" +
        "<p>Слів за хвилину (WPM): " + wpm + "</p>";
}