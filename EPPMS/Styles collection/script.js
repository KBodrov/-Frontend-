const hideSidebarBtn = document.getElementById("hide-sidebar-btn");
const menuArrow = document.getElementById("sidebar-btn");

hideSidebarBtn.addEventListener("click", () => {
    menuArrow.classList.toggle("fa-chevron-right");
});




const menuSidebar = document.getElementById("sidebar");
menuSidebar.addEventListener("click", clickHandler);

function clickHandler(event) {
    if (event.target.hasAttribute("role")) { 
        //console.log(event.target.getAttribute("role"));
        returnHTML("./pages/" + event.target.getAttribute("role"));
    }
}

const mainContent = document.getElementById("main-content");

function returnHTML(file_id) {
    axios.get(file_id)
    .then(function (response) {
    
    mainContent.innerHTML = response.data;
    
    parseClasses();
    // console.log(response.data);
    })
    .catch(function (error) {
    console.log(error);
    });
}

function parseClasses()
{
    const itemsList = document.querySelectorAll(".item-container");
    const codesList = document.querySelectorAll(".code-container");
    for (i = 0; i < itemsList.length; i++)
    {
        codesList[i].innerHTML = '';
        const listOfClasses = itemsList[i].childNodes[1].classList;
        for (j = 0; j < listOfClasses.length; j++)
        {
            const textNode = document.createTextNode(listOfClasses[j]);
            codesList[i].appendChild(textNode);
            const brNode = document.createElement("br");
            codesList[i].appendChild(brNode);
        }
    }
}