const game = document.getElementById("game");

function start() {
  console.log("Game Loaded");
  game.innerHTML = "";
  //
  const gameTitle = document.createElement("div");
  gameTitle.textContent = "悪夢の迷宮";
  gameTitle.setAttribute("id", "gameTitle");
  game.appendChild(gameTitle);
  //
  const gameTitleSub = document.createElement("div");
  gameTitleSub.setAttribute("id", "gameTitleSub");
  gameTitleSub.textContent = "- PROJECT N -";
  game.appendChild(gameTitleSub);
  //
  const gameStart = document.createElement("input");
  gameStart.value = "Start";
  gameStart.setAttribute("type", "button");
  gameStart.setAttribute("id", "startBtn");
  gameStart.setAttribute("class", "btn startMenuBtn");
  game.appendChild(gameStart);
  //
  const gameLoad = document.createElement("input");
  gameLoad.value = "Load";
  gameLoad.setAttribute("type", "button");
  gameLoad.setAttribute("id", "loadBtn");
  gameLoad.setAttribute("class", "btn startMenuBtn");
  game.appendChild(gameLoad);
  game.setAttribute("name", "startMenu");
  //
  const cMark = document.createElement("div");
  cMark.setAttribute("id", "cMark");
  cMark.textContent = "©Namekuji";
  game.appendChild(cMark);
}

function gSt() {
  game.setAttribute("name", "chSct");
}

function charaSelect() {
  game.innerHTML = "";
  //
  const charaSelectTitle = document.createElement("div");
  charaSelectTitle.textContent = "クラスを選択してください。";
  charaSelectTitle.setAttribute("id", "charaSelectTitle");
  game.appendChild(charaSelectTitle);
  //
  const charaSelector1 = document.createElement("input");
  charaSelector1.setAttribute("type", "button");
  charaSelector1.setAttribute("id", "charaSelect1");
  charaSelector1.setAttribute("class", "charaSelectBtn");
  charaSelector1.value = "戦士";
  //
  const charaSelector2 = document.createElement("input");
  charaSelector2.setAttribute("type", "button");
  charaSelector2.setAttribute("id", "charaSelect2");
  charaSelector2.setAttribute("class", "charaSelectBtn");
  charaSelector2.value = "暗殺者";
  //
  const charaSelector3 = document.createElement("input");
  charaSelector3.setAttribute("type", "button");
  charaSelector3.setAttribute("id", "charaSelect3");
  charaSelector3.setAttribute("class", "charaSelectBtn");
  charaSelector3.value = "魔法使い";
  //
  const charaSelector4 = document.createElement("input");
  charaSelector4.setAttribute("type", "button");
  charaSelector4.setAttribute("id", "charaSelect4");
  charaSelector4.setAttribute("class", "charaSelectBtn");
  charaSelector4.value = "村人";
  //
  game.appendChild(charaSelector1);
  game.appendChild(charaSelector2);
  game.appendChild(charaSelector3);
  game.appendChild(charaSelector4);

  //クラス説明
  const chExpl = document.createElement("div");
  chExpl.setAttribute("id", "chExpl");
  game.appendChild(chExpl);
}

function csL() {
  alert("この機能は未実装です");
}

function classHov() {
  if (this.name === 1) {
    let expl = document.getElementById("chExpl");
    expl.innerHTML = `<div id="className"> 戦士</div><div id="explText">高い物理攻撃力と防御力を持つ。<br>移動速度は遅く魔法が苦手</div>`;
  } else if (this.name === 2) {
    let expl = document.getElementById("chExpl");
    expl.innerHTML = `<div id="className"> 暗殺者</div><div id="explText">目にもとまらぬ速度で動き相手を翻弄する。<br>小柄な分打たれ弱く、物理攻撃力が低い</div>`;
  } else if (this.name === 3) {
    let expl = document.getElementById("chExpl");
    expl.innerHTML = `<div id="className">魔法使い </div><div id="explText">高い魔法適性があり、攻撃力が高い。<br>移動速度が遅く、とても撃たれ弱い</div>`;
  } else if (this.name === 4) {
    let expl = document.getElementById("chExpl");
    expl.innerHTML = `<div id="className"> 村人</div><div id="explText">とても平凡な見た目をしている。<br>すべてのステータスが低く、特技もない <br><div id="hiddenMessage">但し勇者一族の末裔である</div></div>`;
  }
}
