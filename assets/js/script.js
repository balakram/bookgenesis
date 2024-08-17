'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


/**
 * Cursor
 */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (event) {
  // event.pageX --> across
  // event.pageY --> up and down
  // console.log(event);
  moveCursor(event.pageX, event.pageY);
});

const moveCursor = function (pageX, pageY) {
  cursor.style.left = pageX + "px";
  cursor.style.top = pageY + "px";
};
/**
 * arrow
 */
let arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  let position = window.scrollY;
  // console.log(position);
  if (position <= 5) {
    arrow.classList.toggle("fade-in");
    arrow.classList.toggle("fade-out");
  }
});
