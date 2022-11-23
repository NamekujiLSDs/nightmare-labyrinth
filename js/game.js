const game = document.getElementById("game");

function start() {
  console.log("Game Loaded");
  game.innerHTML = "";
  const gameTitle = document.createElement("div");
  gameTitle.textContent = "悪夢の迷宮";
  gameTitle.setAttribute("id", "gameTitle");
  game.appendChild(gameTitle);
  const gameStart = document.createElement("input");
  gameStart.value = "Start";
  gameStart.setAttribute("type", "button");
  gameStart.setAttribute("id", "startBtn");
  gameStart.setAttribute("class", "btn startMenuBtn");
  game.appendChild(gameStart);
  const gameLoad = document.createElement("input");
  gameLoad.value = "Load";
  gameLoad.setAttribute("type", "button");
  gameLoad.setAttribute("id", "loadBtn");
  gameLoad.setAttribute("class", "btn startMenuBtn");
  game.appendChild(gameLoad);
  game.setAttribute("name", "startMenu");
}

function gSt() {
  alert("start");
}
function csL() {
  let csv = prompt("a");
  console.log(csv);
  let val = csv;
  if (csv[7] === "w" || csv[7] === "a" || csv[7] === "v" || csv[7] === "m") {
    alert("ロードされました");
  }
}
