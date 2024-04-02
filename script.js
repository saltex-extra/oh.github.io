function rollDice() {
    var diceElement = document.getElementById("dice");
    var randomNumber = Math.floor(Math.random() * 100) + 1; // 1から100のランダムな整数を生成
    diceElement.innerText = randomNumber; // サイコロの目を表示
}
