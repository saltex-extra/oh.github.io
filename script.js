function rollDice() {
    var diceElement = document.getElementById("dice");
    var sum = 0;

    // 3回サイコロを振って合計を計算する
    for (var i = 0; i < 3; i++) {
        var randomNumber = Math.floor(Math.random() * 100) + 1; // 1から100のランダムな整数を生成
        sum += randomNumber;
    }

    // 平均値を計算する
    var average = sum / 3;

    // 結果を表示する
    if (average >= 50) {
        diceElement.innerText = "excellent (Average: " + average.toFixed(2) + ")";
    } else {
        diceElement.innerText = "bad (Average: " + average.toFixed(2) + ")";
    }
}

