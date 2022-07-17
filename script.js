const headshot = document.getElementById("headshot");

headshot.addEventListener('click', changeColor);
function changeColor() {
    headshot.setAttribute("src", 'headshot-pixel-blue.png' )
}