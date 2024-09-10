let randomNumber;
let attempts;

function initGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
}

initGame(); // 初始化遊戲

document.getElementById('guessButton').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = '請輸入一個 1 到 100 之間的數字';
        return;
    }

    if (guess === randomNumber) {
        document.getElementById('message').textContent = `恭喜你！猜對了！你共用了 ${attempts} 次機會。`;
    } else if (guess < randomNumber) {
        document.getElementById('message').textContent = `你猜的數字是 ${guess}。太小了，再試一次！`;
    } else {
        document.getElementById('message').textContent = `你猜的數字是 ${guess}。太大了，再試一次！`;
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    initGame(); // 重新初始化遊戲
});
