import style from "./index.css";
import "./clearButton";
import _ from "lodash";
import logo from "./assets/icon-square-big.png"
import "./assets/fonts/Redressed-Regular.ttf";

const btn1 = document.getElementById("button1");
const logoImg = document.getElementById("logo");

document.getElementById("button1").addEventListener("click", function () {
  const el = document.getElementById("header");
  el.innerHTML = "Hey i have updated the code !";
  el.classList.add([style.header]);

  const listItems = ["Apple", "Orange", "Banana"];
  const ul = document.getElementById("shoppingList");

  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
});

btn1.classList.add([style.button]);
logoImg.src = logo;
