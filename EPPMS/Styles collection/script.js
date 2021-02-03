const hideSidebarBtn = document.getElementById("hide_sidebar_btn");
const menuArrow = document.getElementById("sidebar_btn");

hideSidebarBtn.addEventListener("click", () => {
    menuArrow.classList.toggle("fa-chevron-right");
});




