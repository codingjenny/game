let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (gameBoard[index] !== '' || checkWinner()) return; // 如果格子已經有值，或已經有勝者，跳過

    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
        setTimeout(() => alert(`${winner} 贏了！`), 100);
        return;
    }

    // 檢查是否平手
    if (gameBoard.every(cell => cell !== '')) {
        setTimeout(() => alert('平手！'), 100);
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // 切換玩家
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], // 第一行
        [3, 4, 5], // 第二行
        [6, 7, 8], // 第三行
        [0, 3, 6], // 第一列
        [1, 4, 7], // 第二列
        [2, 5, 8], // 第三列
        [0, 4, 8], // 左上到右下對角線
        [2, 4, 6]  // 右上到左下對角線
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
}

document.getElementById('resetButton').addEventListener('click', resetGame);

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X'; // 重置為初始玩家
}
