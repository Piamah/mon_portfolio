var sideMenu = document.getElementById("sideMenu");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    sideMenu.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    sideMenu.classList.remove("active");
}
