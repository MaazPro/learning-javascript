let minutes = 0;
let seconds = 0;
let time = 0;
const displayTime = document.getElementById("display");
displayTime.innerHTML = "0 : 0";
function startTime() {
  time = setInterval(() => {
    seconds++;
    displayTime.innerHTML = `${minutes} : ${seconds}`;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    console.log(`${minutes}:${seconds}`);
    setTimeout(() => {
      if (minutes >= 1) {
        alert(`${minutes} minute has elapsed!`);
      } else {
        alert(`${minutes} minutes have elapsed!`);
      }
    }, 60000);
  }, 1000);
}
const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", () => {
  clearInterval(time);
  alert("Stoped");
});

const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
  alert("start");
  startTime();
});

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  minutes = 0;
  seconds = 0;
  displayTime.innerHTML = "0 : 0";
});

const parent = document.getElementById("parent");
const addTimeBtn = document.getElementById("addTime");
const list = document.getElementById("list");
addTimeBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = `${minutes} : ${seconds}`;
  list.appendChild(li);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Cross time";
  deleteBtn.style.marginLeft = "5px";
  deleteBtn.className = "btn"
  li.appendChild(deleteBtn);
  const changeColorBtn = document.createElement("button");
  changeColorBtn.innerText = "Change color";
  li.appendChild(changeColorBtn);

  li.addEventListener("click", (e) => {
    if (e.target.className === "btn") {
      li.style.textDecoration = "line-through";
    }
  });

  changeColorBtn.addEventListener("click", (e) => {
    li.style.color = "red";
    e.stopPropagation()
  });
});