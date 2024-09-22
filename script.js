const sideMenu = document.getElementById("sideMenu");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    sideMenu.classList.add("active");
}


function closeNav() {
    sideMenu.classList.remove("active");
}