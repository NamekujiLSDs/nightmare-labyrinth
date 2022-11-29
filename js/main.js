window.onload = function () {
  start();
};
function csJson() {
  let url = "js/json/cs.json";
  fetch(url).then(function (resp) {
    return resp.json();
  });
}

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
    const gameNow = mutation.target.getAttribute("name");
    if (gameNow === "startMenu") {
      document.getElementById("startBtn").addEventListener("click", gSt);
      document.getElementById("loadBtn").addEventListener("click", csL);
    } else if (gameNow === "chSct") {
      charaSelect();
      document
        .getElementById("charaSelect1")
        .addEventListener("mouseover", { name: 1, handleEvent: classHov });
      document
        .getElementById("charaSelect1")
        .addEventListener("click", { name: "j1", handleEvent: classClick });
      document
        .getElementById("charaSelect2")
        .addEventListener("mouseover", { name: 2, handleEvent: classHov });
      document
        .getElementById("charaSelect2")
        .addEventListener("click", { name: "j2", handleEvent: classClick });
      document
        .getElementById("charaSelect3")
        .addEventListener("mouseover", { name: 3, handleEvent: classHov });
      document
        .getElementById("charaSelect3")
        .addEventListener("click", { name: "j3", handleEvent: classClick });
      document
        .getElementById("charaSelect4")
        .addEventListener("mouseover", { name: 4, handleEvent: classHov });
      document
        .getElementById("charaSelect4")
        .addEventListener("click", { name: "j4", handleEvent: classClick });
    } else if (gameNow === "int") {
      stats();
      // intro();
    }
  }
}
//ターゲット要素をDOMで取得
const target = document.getElementById("game");
//インスタンス化
const obs = new MutationObserver(callback);
//ターゲット要素の監視を開始
obs.observe(target, options);
