// "use strict";
const navLink = document.querySelectorAll(".navigation__link");
const navBtn = document.querySelector(".navigation__btn");
const links = document.querySelectorAll("a");
const button = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");
const checkbox = document.querySelector(".navigation__checkbox");

navLink.forEach((el) => (el.tabIndex = -1));

let navState = false;
const navBtnHandler = function () {
  navState ? (navState = false) : (navState = true);
  if (navState) {
    links.forEach((el) => {
      el.tabIndex = -1;
    });
    button.forEach((el) => {
      el.tabIndex = -1;
    });
    inputs.forEach((el) => {
      el.tabIndex = -1;
    });
    navLink.forEach((el) => {
      el.tabIndex = 0;
    });
    navBtn.tabIndex = 0;
    console.log(1);
  } else {
    links.forEach((el) => {
      el.tabIndex = 0;
    });
    button.forEach((el) => {
      el.tabIndex = 0;
    });
    inputs.forEach((el) => {
      el.tabIndex = 0;
    });
    navLink.forEach((el) => {
      el.tabIndex = -1;
    });
    navBtn.tabIndex = 0;
  }
};

navBtn.addEventListener("click", navBtnHandler);

navLink.forEach((el) => {
  el.addEventListener("click", () => {
    checkbox.checked = false;
  });
});
