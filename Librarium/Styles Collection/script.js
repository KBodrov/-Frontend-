const menuArrow = document.getElementById("sidebar_btn");

menuArrow.addEventListener("click", () => {
    menuArrow.classList.toggle("fa-chevron-right");
});

const menuSidebar = document.getElementById("sidebar");
menuSidebar.addEventListener("click", clickHandler);

function clickHandler(event) {
    if (event.target.hasAttribute("role")) { 
        console.log(event.target.getAttribute("role"));
    }
}

// const menuBtn = documenent.getElementsByClassName("clickable-menu-btn");


