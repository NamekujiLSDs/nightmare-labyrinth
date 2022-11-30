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
let stsE;

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

//セーブデータの読み込み
function csL() {
  let b64R = prompt("セーブしたコードを入力");
  console.log(b64R);

  b64R2 = b64R.split("");
  for (i = 0; i < b64R.length; i++) {
    console.log(b64R2[i]);
    const isUpperCase = (c) => {
      return /^[A-Z]+$/g.test(c);
    };

    console.log(isUpperCase(b64R2[i]));
    if (isUpperCase(b64R2[i])) {
      b64R2[i] = b64R2[i].toLowerCase();
    } else {
      b64R2[i] = b64R2[i].toUpperCase();
    }
  }

  let b64SplitR = b64R2.reverse();
  console.log(b64SplitR);
  let b64Join = b64SplitR.join("");
  console.log(b64Join);
  let savedData = decodeURIComponent(escape(atob(b64Join)));
  console.log(savedData);
  let result = JSON.parse(savedData);
  console.log(result);
  stsL = result.l;
  stsA = result.a;
  stsD = result.d;
  stsH = result.h;
  stsHM = result.h;
  stsM = result.m;
  stsMM = result.m;
  stsS = result.s;
  stsC = result.c;
}

//クラスをホバーしたときの説明文
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
    stsN = "名無し";
  } else {
    stsN = document.getElementById("nameInput").value;
  }
  game.setAttribute("name", "gameMenu_1");
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
    job = "\u6226\u58eb";
    //戦士
  } else if (stsC === "w" && stsL >= 100) {
    job = "\u8056\u9a0e\u58eb";
    //聖騎士
  } else if (stsC === "a" && stsL <= 100) {
    job = "\u6697\u6bba\u8005";
    //暗殺者
  } else if (stsC === "a" && stsL >= 100) {
    job = "\u706b\u5f71";
    //火影
  } else if (stsC === "m" && stsL <= 100) {
    job = "\u9b54\u6cd5\u4f7f\u3044";
    //魔法使い
  } else if (stsC === "m" && stsL >= 100) {
    job = "\u5927\u8ce2\u8005";
    //大賢者
  } else if (stsC === "v" && stsL <= 100) {
    job = "\u6751\u4eba";
    //村人
  } else if (stsC === "v" && stsL >= 100) {
    job = "\u52c7\u8005";
    //勇者
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

async function gameMenu(val) {
  const msgJsonUrl = "./js/json/msg.json";
  let result = await fetch(msgJsonUrl);
  let msgJson = await result.json();
  console.log(msgJson);

  const menuHolderC = document.createElement("div");
  menuHolderC.setAttribute("id", "gameMenu");
  game.appendChild(menuHolderC);

  const menuItem1 = document.createElement("input");
  menuItem1.setAttribute("id", "menuItem1");
  menuItem1.setAttribute("type", "button");
  menuItem1.value = msgJson[val][1];

  const menuItem2 = document.createElement("input");
  menuItem2.setAttribute("id", "menuItem2");
  menuItem2.setAttribute("type", "button");
  menuItem2.value = msgJson[val][2];

  const menuItem3 = document.createElement("input");
  menuItem3.setAttribute("id", "menuItem3");
  menuItem3.setAttribute("type", "button");
  menuItem3.value = msgJson[val][3];

  const menuItem4 = document.createElement("input");
  menuItem4.setAttribute("id", "menuItem4");
  menuItem4.setAttribute("type", "button");
  menuItem4.value = msgJson[val][4];

  document.getElementById("gameMenu").appendChild(menuItem1);
  document.getElementById("gameMenu").appendChild(menuItem2);
  document.getElementById("gameMenu").appendChild(menuItem3);
  document.getElementById("gameMenu").appendChild(menuItem4);

  arato();
}

//データのエクスポート
//statusを出力→B64に変換→反転→大文字小文字入れ替え→結合
function saveData() {
  const stats = `{ "l":"${stsL}","a":"${stsA}","d":"${stsD}","h":"${stsH}","hm":"${stsHM}","m":"${stsM}","mm":"${stsMM}","s":"${stsS}","c":"${stsC}","n":"${stsN}"}`;
  const b64Stats = window.btoa(unescape(encodeURIComponent(stats)));
  let b64Split = b64Stats.split("");
  let b64SplitR = b64Split.reverse();
  console.log(b64SplitR);
  for (i = 0; i < b64Stats.length; i++) {
    console.log(b64SplitR[i]);
    const isUpperCase = (c) => {
      return /^[A-Z]+$/g.test(c);
    };
    console.log(isUpperCase(b64SplitR[i]));
    if (isUpperCase(b64SplitR[i])) {
      b64SplitR[i] = b64SplitR[i].toLowerCase();
    } else {
      b64SplitR[i] = b64SplitR[i].toUpperCase();
    }
  }
  let b64Join = b64SplitR.join("");
  console.log(b64Join);
}

function arato() {
  console.log("aho");
}
