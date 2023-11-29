"use strict";

let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

let homeAdd1Point = document.getElementById("home1");
let homeAdd2Point = document.getElementById("home2");
let homeAdd3Point = document.getElementById("home3");

let guestAdd1Point = document.getElementById("guest1");
let guestAdd2Point = document.getElementById("guest2");
let guestAdd3Point = document.getElementById("guest3");

let count = 0;
let count2 = 0;

function homeAdd1() {
  console.log("+1 clicked");

  count += 1;
  scoreHome.innerText = count;
}

function homeAdd2() {
  console.log("+2 clicked");
  count += 2;
  scoreHome.innerText = count;
}

function homeAdd3() {
  console.log("+3 clicked");
  count += 3;
  scoreHome.innerText = count;
}

function guestAdd1() {
  console.log("+1 clicked");
  count2 += 1;
  scoreGuest.innerText = count2;
}

function guestAdd2() {
  console.log("+2 clicked");
  count2 += 2;
  scoreGuest.innerText = count2;
}

function guestAdd3() {
  console.log("+3 clicked");
  count2 += 3;
  scoreGuest.innerText = count2;
}
