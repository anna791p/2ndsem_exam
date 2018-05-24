
let i = 0;
let video = document.querySelector("#anim");


setInterval(changeSrc, 80);
function changeSrc(){
    video.src = "animation/testing" + i + ".jpg";
    i++;
    if (i > 57){
        i = 0;
    }
}
