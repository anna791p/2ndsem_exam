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
  appbar.classList.toggle("shadow");

}


// let temp = document.getElementById('recenttemp');
// let hover = document.querySelector('.recentitem');


// temp.addEventListener("mousover", function() {
//   handleProjectItemHover(temp, 'block');
// });
// temp.addEventListener("mouseout", function() {
//   handleProjectItemHover(temp, 'none');
// });


// let handleProjectItemHover = function(projectItemElement, option) {
//   projectItemElement.children[0].style.display = option;
// }