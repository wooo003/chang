const inform = document.getElementById("program");

function mouseEnter() {
    inform.classList.toggle("box1");
}
inform.addEventListener("click",mouseEnter);
