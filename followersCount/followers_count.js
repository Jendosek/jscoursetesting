let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if (count === 10) {
      alert("Ваш пост в Instagram отримав 10 підписників! Вітаємо!");
    } else if (count === 20) {
      alert("Ваш пост в Instagram отримав 20 підписників! Продовжуйте в тому ж дусі!");
    }
  }