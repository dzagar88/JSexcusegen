/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //added variables from assignment notes
  //auto-save wrapped the last one..
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //auto-save wrapped my variable... but I used Math.floor and Math.random and the .length property to return
  //the number of elements in the array. Math.random generates a number between 0-1 and mulitplies
  //against the .length value to give you a random number within the number of elements in the array
  //which that number is used as an argument to select for each variable's array position..
  var excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    "!";

  var p = document.querySelector("#excuse");
  p.textContent = excuse;
};
