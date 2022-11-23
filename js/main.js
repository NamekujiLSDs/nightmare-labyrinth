window.onload = function () {
  start();
};
let cs = "";
const w = ["1", "15", "10", "5", "20", "5", "", "w"];
const a = ["1", "10", "5", "10", "10", "20", "", "a"];
const m = ["1", "10", "5", "20", "12", "8", "", "m"];
const v = ["1", "11", "11", "11", "11", "11", "", "v"];

// W = Warrior
// A = Assassin
// M = Mage
// V = Villeger

// [0] Lv
// [1] ATK
// [2] DEF
// [3] MP
// [4] HP
// [5] SPD
// [6] Name
// [7] Class

//右クリック・文字選択の無効化
document.onselectstart = function () {
  return false;
};
document.oncontextmenu = function () {
  return false;
};

//gameを監視してちょめちょめ
const options = {
  attributes: true, //属性の変化を監視
};
//コールバック関数
function callback(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.target.getAttribute("name") === "startMenu") {
      document.getElementById("startBtn").addEventListener("click", gSt);
      document.getElementById("loadBtn").addEventListener("click", csL);
    }
  }
}
//ターゲット要素をDOMで取得
const target = document.getElementById("game");
//インスタンス化
const obs = new MutationObserver(callback);
//ターゲット要素の監視を開始
obs.observe(target, options);
