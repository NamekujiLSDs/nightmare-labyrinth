const game = document.getElementById("game");

let stsL;
let stsA;
let stsD;
let stsH;
let stsHM;
let stsM;
let stsMM;
let stsS;
let stsC;
let stsN;

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
  charaSelectTitle.textContent =
    "\u30af\u30e9\u30b9\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044";
  charaSelectTitle.setAttribute("id", "charaSelectTitle");
  game.appendChild(charaSelectTitle);
  //
  const nameInputLabel = document.createElement("label");
  nameInputLabel.setAttribute("id", "nameInputLabel");
  nameInputLabel.textContent = "\u540d\u524d\u3092\u5165\u529b\u003a";
  game.appendChild(nameInputLabel);
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("maxlength", "8");
  nameInput.setAttribute("id", "nameInput");
  document.getElementById("nameInputLabel").appendChild(nameInput);
  const nameRandom = document.createElement("input");
  nameRandom.setAttribute("id", "randNBtn");
  nameRandom.setAttribute("type", "button");
  nameRandom.setAttribute("onclick", "randomName()");
  nameRandom.value = "shuffle";
  document.getElementById("nameInputLabel").appendChild(nameRandom);
  //
  const charaSelector1 = document.createElement("input");
  charaSelector1.setAttribute("type", "button");
  charaSelector1.setAttribute("id", "charaSelect1");
  charaSelector1.setAttribute("class", "charaSelectBtn");
  charaSelector1.value = "\u6226\u58eb";
  //
  const charaSelector2 = document.createElement("input");
  charaSelector2.setAttribute("type", "button");
  charaSelector2.setAttribute("id", "charaSelect2");
  charaSelector2.setAttribute("class", "charaSelectBtn");
  charaSelector2.value = "\u6697\u6bba\u8005";
  //
  const charaSelector3 = document.createElement("input");
  charaSelector3.setAttribute("type", "button");
  charaSelector3.setAttribute("id", "charaSelect3");
  charaSelector3.setAttribute("class", "charaSelectBtn");
  charaSelector3.value = "\u9b54\u6cd5\u4f7f\u3044";
  //
  const charaSelector4 = document.createElement("input");
  charaSelector4.setAttribute("type", "button");
  charaSelector4.setAttribute("id", "charaSelect4");
  charaSelector4.setAttribute("class", "charaSelectBtn");
  charaSelector4.value = "\u6751\u4eba";
  //
  game.appendChild(charaSelector1);
  game.appendChild(charaSelector2);
  game.appendChild(charaSelector3);
  game.appendChild(charaSelector4);

  //
  const chExpl = document.createElement("div");
  chExpl.setAttribute("id", "chExpl");
  game.appendChild(chExpl);
}

function csL() {
  alert("\u3053\u306e\u6a5f\u80fd\u306f\u672a\u5b9f\u88c5\u3067\u3059");
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

function randomName() {
  let list1 = [
    "流浪の",
    "名無しの",
    "紅蓮の",
    "漆黒の",
    "純白の",
    "墓守の",
    "平凡な",
    "退屈な",
    "傀儡の",
    "強欲な",
    "破壊の",
    "祝福の",
    "極光の",
    "天上の",
    "黄泉の",
    "深淵の",
    "疾風の",
    "暗躍の",
    "不可視の",
    "創造の",
    "創世の",
    "双璧の",
    "氷結の",
    "錬鉄の",
  ];
  let list2 = [
    "悪夢",
    "道化師",
    "支配者",
    "荒鷲",
    "雷帝",
    "征服者",
    "貴公子",
    "剣士",
    "暗殺者",
    "魔導士",
    "王",
    "騎士",
    "勇者",
    "怪物",
    "永久機関",
    "覇者",
    "統一者",
    "謳声",
  ];
  document.getElementById("nameInput").value =
    list1[Math.floor(Math.random() * list1.length)] +
    list2[Math.floor(Math.random() * list2.length)];
}

async function classClick() {
  let cN = this.name;
  console.log(cN);
  const getJson = await fetch("js/json/cs.json");
  const result = await getJson.json();
  console.log(result);
  stsL = result[cN][0].l;
  stsA = result[cN][0].a;
  stsD = result[cN][0].d;
  stsH = result[cN][0].h;
  stsHM = result[cN][0].h;
  stsM = result[cN][0].m;
  stsMM = result[cN][0].m;
  stsS = result[cN][0].s;
  stsC = result[cN][0].c;
  if (!document.getElementById("nameInput").value) {
    let list1 = [
      "流浪の",
      "名無しの",
      "紅蓮の",
      "漆黒の",
      "純白の",
      "墓守の",
      "平凡な",
      "退屈な",
      "傀儡の",
      "強欲な",
      "破壊の",
      "祝福の",
      "極光の",
      "天上の",
      "黄泉の",
      "深淵の",
      "疾風の",
      "暗躍の",
      "不可視の",
      "創造の",
      "創世の",
      "双璧の",
      "氷結の",
      "錬鉄の",
    ];
    let list2 = [
      "悪夢",
      "道化師",
      "支配者",
      "荒鷲",
      "雷帝",
      "征服者",
      "貴公子",
      "剣士",
      "暗殺者",
      "魔導士",
      "王",
      "騎士",
      "勇者",
      "怪物",
      "永久機関",
      "覇者",
      "統一者",
      "謳声",
    ];
    stsN =
      list1[Math.floor(Math.random() * list1.length)] +
      list2[Math.floor(Math.random() * list2.length)];
  } else {
    stsN = document.getElementById("nameInput").value;
  }
  game.setAttribute("name", "int");
}

function intro() {}

function stats() {
  game.innerHTML = "";
  const statsHolderC = document.createElement("div");
  statsHolderC.setAttribute("id", "statsHolder");
  game.appendChild(statsHolderC);
  const statsHolder = document.getElementById("statsHolder");

  const pNC = document.createElement("div");
  pNC.setAttribute("id", "playerName");
  pNC.textContent = "名前：" + stsN;

  const pCC = document.createElement("div");
  pCC.setAttribute("id", "playerClass");
  let job;
  if (stsC === "w" && stsL <= 100) {
    job = "戦士";
  } else if (stsC === "w" && stsL >= 100) {
    job = "聖騎士";
  } else if (stsC === "a" && stsL <= 100) {
    job = "暗殺者";
  } else if (stsC === "a" && stsL >= 100) {
    job = "火影";
  } else if (stsC === "m" && stsL <= 100) {
    job = "魔法使い";
  } else if (stsC === "m" && stsL >= 100) {
    job = "大賢者";
  } else if (stsC === "v" && stsL <= 100) {
    job = "村人";
  } else if (stsC === "v" && stsL >= 100) {
    job = "勇者";
  }
  pCC.textContent = "職業：" + job;

  const pLC = document.createElement("div");
  pLC.setAttribute("id", "playerLvl");
  pLC.textContent = "経験：" + stsL;

  const pAC = document.createElement("div");
  pAC.setAttribute("id", "playerAtk");
  pAC.textContent = "攻撃力：" + stsA;

  const pDC = document.createElement("div");
  pDC.setAttribute("id", "playerDef");
  pDC.textContent = "防御力：" + stsD;

  const pHC = document.createElement("div");
  pHC.setAttribute("id", "playerHP");
  pHC.textContent = "体力：" + stsH + "/" + stsHM;

  const pMC = document.createElement("div");
  pMC.setAttribute("id", "playerMana");
  pMC.textContent = "魔力：" + stsM + "/" + stsMM;

  const pSC = document.createElement("div");
  pSC.setAttribute("id", "playerSpeed");
  pSC.textContent = "速度：" + stsS;

  statsHolder.appendChild(pNC);
  statsHolder.appendChild(pCC);
  statsHolder.appendChild(pLC);
  statsHolder.appendChild(pAC);
  statsHolder.appendChild(pDC);
  statsHolder.appendChild(pHC);
  statsHolder.appendChild(pMC);
  statsHolder.appendChild(pSC);
}
