
let num = 0;

let timeInterval2 = setInterval(()=>{
  num ++;
  if(num > 3){
    num = 1
  }
}, 3000)

// function randomNumber() {
//   num = Math.floor(Math.random() * 3) + 1;
//   return num;
// }

const stopBtn = document.getElementById("stop");
const startBtn = document.getElementById("start");

const d1 = document.getElementById("nested-d1");
const d2 = document.getElementById("nested-d2");
const d3 = document.getElementById("nested-d3");

const d4 = document.getElementById("nested-d4");
const d5 = document.getElementById("nested-d5");
const d6 = document.getElementById("nested-d6");

const d7 = document.getElementById("nested-d7");
const d8 = document.getElementById("nested-d8");
const d9 = document.getElementById("nested-d9");
let count1 = 0;
let count2 = 0;
let count3 = 0;
let flag = false;
let flag2 = true;
function greenLight2() {
  // let num2 = randomNumber();
  flag = false;
  if (num === 1) {
    count2 = 0;
    count3 = 0;
    d1.style.backgroundColor = "white";
    if (count1 === 0) {
      d2.style.backgroundColor = "yellow";
      setTimeout(() => {
        d2.style.backgroundColor = "white";
        d3.style.backgroundColor = "green";
        console.log(count1);
      }, 500);
      count1++;
    }

    d4.style.backgroundColor = "red";
    d6.style.backgroundColor = "white";

    d7.style.backgroundColor = "red";
    d9.style.backgroundColor = "white";
  }
  if (num === 2) {
    count1 = 0;
    count3 = 0;
    d1.style.backgroundColor = "red";
    d3.style.backgroundColor = "white";

    d4.style.backgroundColor = "white";
    if (count2 === 0) {
      d5.style.backgroundColor = "yellow";
      setTimeout(() => {
        d5.style.backgroundColor = "white";
        d6.style.backgroundColor = "green";
        console.log(count1);
      }, 500);
      count2++;
    }

    d7.style.backgroundColor = "red";
    d9.style.backgroundColor = "white";
  }
  if (num === 3) {
    count1 = 0;
    count2 = 0;
    d1.style.backgroundColor = "red";
    d3.style.backgroundColor = "white";

    d4.style.backgroundColor = "red";
    d6.style.backgroundColor = "white";

    d7.style.backgroundColor = "white";
    if (count3 === 0) {
      d8.style.backgroundColor = "yellow";
      setTimeout(() => {
        d8.style.backgroundColor = "white";
        d9.style.backgroundColor = "green";
      }, 500);
      count3++;
    }
  }
}

function whiteLight() {
  if (
    d1.style.backgroundColor !== "white" ||
    d2.style.backgroundColor !== "white" ||
    d3.style.backgroundColor !== "white" ||
    d4.style.backgroundColor !== "white" ||
    d5.style.backgroundColor !== "white" ||
    d6.style.backgroundColor !== "white" ||
    d7.style.backgroundColor !== "white" ||
    d8.style.backgroundColor !== "white" ||
    d9.style.backgroundColor !== "white"
  ) {
    d1.style.backgroundColor = "white";
    d2.style.backgroundColor = "white";
    d3.style.backgroundColor = "white";
    d4.style.backgroundColor = "white";
    d5.style.backgroundColor = "white";
    d6.style.backgroundColor = "white";
    d7.style.backgroundColor = "white";
    d8.style.backgroundColor = "white";
    d9.style.backgroundColor = "white";
  }
}

let greenLightInterval = setInterval(() => {
  greenLight2();
}, 2000);

let yellowLightInterval = "";
let yellowLightInterval2 = "";
stopBtn.addEventListener("click", () => {
  if (flag2) {
    flag = true;
    flag2 = false;
    console.log("in the stop button");

    clearInterval(greenLightInterval);
    whiteLight();
    yellowLightInterval = setInterval(() => {
      if (
        d2.style.backgroundColor === "white" &&
        d5.style.backgroundColor === "white" &&
        d8.style.backgroundColor === "white"
      ) {
        d2.style.backgroundColor = "yellow";
        d5.style.backgroundColor = "yellow";
        d8.style.backgroundColor = "yellow";
      }
    }, 1000);
    yellowLightInterval2 = setInterval(() => {
      d2.style.backgroundColor = "white";
      d5.style.backgroundColor = "white";
      d8.style.backgroundColor = "white";
      console.log(d2.style.backgroundColor);
    }, 2000);
  }
});

startBtn.addEventListener("click", () => {
  if (flag) {
    flag = false;
    flag2 = true;
    clearInterval(yellowLightInterval);
    clearInterval(yellowLightInterval2);
    whiteLight();
    greenLightInterval = setInterval(() => {
      greenLight2();
    }, 2000);
  }
});
