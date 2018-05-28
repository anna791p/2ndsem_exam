let i = 0;
let video = document.querySelector("#anim");
let vidmobile = document.querySelector("#anim-mobile")


setInterval(changeSrc, 80);

function changeSrc() {
  video.src = "animation/testing" + i + ".jpg";
  vidmobile.src = "animation/testing-mobile" + i + ".jpg";

  i++;
  if (i > 57) {
    i = 0;
  }
}