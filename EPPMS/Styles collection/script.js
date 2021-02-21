//----------------------------------------------------------------------------------|
//                                                                                  |
//                 Change sidebar show/hide icon on click                           |
//                                                                                  |
//----------------------------------------------------------------------------------|
const hideSidebarBtn = document.getElementById("hide-sidebar-btn");
const menuArrow = document.getElementById("sidebar-btn");

hideSidebarBtn.addEventListener("click", () => {
    menuArrow.classList.toggle("fa-chevron-right");
});



//----------------------------------------------------------------------------------|
//                                                                                  |
//         Load content from different html-pages to Article section                |
//                                                                                  |
//----------------------------------------------------------------------------------|
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



//----------------------------------------------------------------------------------|
//                                                                                  |
//         Parse Classes and add HTML and Classes content to page                   |
//                                                                                  |
//----------------------------------------------------------------------------------|
function parseClasses()
{
    const itemsList = document.querySelectorAll(".content-item");
    const codesList = document.querySelectorAll(".content-code");
    const htmlList = document.querySelectorAll(".content-html");
    for (i = 0; i < itemsList.length; i++)
    {
        codesList[i].innerHTML = '';
        htmlList[i].innerHTML = '';
        const listOfClasses = itemsList[i].childNodes[1].classList;
        const innerContent = itemsList[i].innerHTML;
        const secondTextNode = document.createTextNode(innerContent);
        htmlList[i].appendChild(secondTextNode);
        w3CodeColor(htmlList[i]);
        for (j = 0; j < listOfClasses.length; j++)
        {
            const textNode = document.createTextNode(listOfClasses[j]);
            codesList[i].appendChild(textNode);
            const brNode = document.createElement("br");
            codesList[i].appendChild(brNode);
        }
    }
}



//----------------------------------------------------------------------------------|
//                                                                                  |
//                          Copy to clipboard function                              |
//                                                                                  |
//----------------------------------------------------------------------------------|
function copyToClipboard(text) {
    const textAreaForCopying = document.createElement("textarea");

    textAreaForCopying.style.position = 'fixed';
    textAreaForCopying.style.top = 0;
    textAreaForCopying.style.left = 0;

    textAreaForCopying.style.width = '1em';
    textAreaForCopying.style.height = '1em';

    textAreaForCopying.style.padding = 0;

    textAreaForCopying.style.border = 'none';
    textAreaForCopying.style.outline = 'none';
    textAreaForCopying.style.boxShadow = 'none';

    textAreaForCopying.style.background = 'transparent';

    textAreaForCopying.value = text;

    document.body.appendChild(textAreaForCopying);
    textAreaForCopying.focus();
    textAreaForCopying.select();

    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    document.body.removeChild(textAreaForCopying);
}

