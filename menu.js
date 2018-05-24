let menuOpen = false;
let menuIcon = document.querySelector(".menuIcon")
let menu = document.querySelector(".menu");
let bars = menuIcon.querySelectorAll("rect");
let appbar = document.querySelector(".appbar")
menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuOpen = !menuOpen;
  bars[0].classList.toggle("rotateDown");
  bars[1].classList.toggle("fadeOut");
  bars[2].classList.toggle("rotateUp");
  menu.classList.toggle("hidden");

}

// Video into pictures
// let vidImg = document.querySelector("#vid_img");
// let n = 1;

// console.log("vidImg:" + vidImg);
// // vidImg.src = "img/2.jpg";

// setInterval(function() {
//   vidImg.src = "img/" + n + ".jpg";
//   n = n + 1;
//   if (n > 10) {
//     n = 1;
//   }
// }, 200);