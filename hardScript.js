let i = 0;
document.querySelector(".curcle").onclick = function () {
  i += 1;
  document.querySelector(".number").innerHTML = i;
  document.querySelector(".numberShowModal").innerHTML = i;
};

let sec = 30;

document.querySelector(".start").onclick = function () {
  document.querySelector(".curcle").style.display = "block";
  document.querySelector(".timer").style.display = "block";
  document.querySelector(".start").style.display = "none";
  if (document.querySelector(".start").onclick) {
    document.querySelector(".theend").style.marginLeft = 720 + "px";
  }
  function timerr() {
    sec -= 1;
    timer.innerHTML = sec;
    if (sec == 0) {
      let dialog = document.querySelector(".end");
      dialog.showModal();
      document.querySelector(".close").onclick = function () {
        dialog.close();
      };
      document.querySelector(".timer").style.display = "none";
      curcle.style.display = "none";
    }
    document.querySelector(".theend").onclick = function () {
      document.querySelector(".curcle").style.display = "none";
      window.location.reload();
    };
  }
  setInterval(timerr, 1000);
};
let curcle = document.querySelector(".curcle");

function changeMarginm() {
  let max = 550;
  let min = 0;
  let margin = (curcle.style.margin =
    Math.floor(Math.random() * (max - min)) + "px");
}

changeMarginm();

function changeMargin() {
  let max = 550;
  let min = 0;

  let marginTop = (curcle.style.marginTop =
    Math.floor(Math.random() * (max - min)) + "px");
}
function changeMarginn() {
  let max = 1450;
  let min = 0;
  let marginLeft = (curcle.style.marginLeft =
    Math.floor(Math.random() * (max - min)) + "px");
}

function changeMarginnn() {
  let max = 1500;
  let min = 0;
  let marginBottom = (curcle.style.marginBottom =
    Math.floor(Math.random() * (max - min)) + "px");

  let marginRight = (curcle.style.marginRight =
    Math.floor(Math.random() * (max - min)) + "px");
}
setInterval(changeMargin, 1000);
setInterval(changeMarginn, 1000);
setInterval(changeMarginnn, 1000);

let timer = document.querySelector(".timer");
let start = document.querySelector(".start");
let second = document.querySelector(".second");

let dialog = document.querySelector(".descriptionWindow");
document.querySelector(".rule").onclick = function () {
  dialog.showModal();
};
document.querySelector(".cover").onclick = function () {
  dialog.close();
};

document.querySelector(".further").onclick = function () {
  document.querySelector(".description").style.display = "none";
  document.querySelector(".descriptionOne").style.display = "block";
  document.querySelector(".descriptionTwo").style.display = "block";
  document.querySelector(".further").style.display = "none";
  document.querySelector(".cover").style.display = "block";
  document.querySelector(".back").style.display = "block";
};

document.querySelector(".back").onclick = function () {
  document.querySelector(".description").style.display = "block";
  document.querySelector(".descriptionOne").style.display = "none";
  document.querySelector(".descriptionTwo").style.display = "none";
  document.querySelector(".further").style.display = "block";
  document.querySelector(".cover").style.display = "none";
  document.querySelector(".back").style.display = "none";
};

document.querySelector(".dark").onclick = function () {
  document.querySelector(".area").style.backgroundColor = "#0c0c13";
  document.querySelector(".area").style.border = "solid #598f81 3px";
  curcle.style.backgroundColor = "white";
};

document.querySelector(".bright").onclick = function () {
  document.querySelector(".area").style.backgroundColor = "#a5f4f4";
  document.querySelector(".area").style.border = "solid black 3px";
  curcle.style.backgroundColor = "red";
};
