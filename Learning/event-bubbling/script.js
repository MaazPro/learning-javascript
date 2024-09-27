const list = document.getElementById("list");
let li;
for (let i = 0; i < 5; i++) {
  li = document.createElement("li");
  const btn = document.createElement("button");
  li.innerText = "List item";
  li.classList = "item";
  btn.innerText = "Add list";
  list.appendChild(li);
  li.appendChild(btn);
}
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const listItem = e.target.closest(".item");
    listItem.style.color = "red";
    console.log(e.target.closest(".item"));
  }
});