// script.js
function rollDice() {
  var result = document.getElementById('result');
  var roll1 = Math.floor(Math.random() * 10) + 1;
  var roll2 = Math.floor(Math.random() * 10) + 1;
  var roll3 = Math.floor(Math.random() * 10) + 1;
  var product = roll1 * roll2 * roll3;

  if (product >= 901) {
    result.textContent = 'Great';
  } else {
    result.textContent = 'Bad';
  }
}
