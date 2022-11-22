const game = document.getElementById('game')

function start() {
    console.log("Game Loaded");
    game.innerHTML = "";
    const gameTitle = document.createElement('div');
    gameTitle.textContent = "悪夢の迷宮"
    gameTitle.setAttribute('id', 'gameTitle')
    game.appendChild(gameTitle)
}