const menuArrow = document.getElementById("sidebar_btn");

menuArrow.addEventListener("click", () => {
    menuArrow.classList.toggle("fa-chevron-right");
});

const menuSidebar = document.getElementById("sidebar");
menuSidebar.addEventListener("click", clickHandler);

function clickHandler(event) {
    if (event.target.hasAttribute("role")) { 
        //console.log(event.target.getAttribute("role"));
        returnHTML("./" + event.target.getAttribute("role"));
    }
}

const mainContent = document.getElementById("content");

function returnHTML(file_id) {
    axios.get(file_id)
    .then(function (response) {
    
    mainContent.innerHTML = response.data;
    
    console.log(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
}




