let COLS = 3;
let ROWS = 3;

addRows(COLS, ROWS);
let numberOfFields = countFields();
//console.log(numberOfFields);
clickHandler();


function addRows(fieldsQuantity, rowsQuantity) {
    counter = 1;
    for (let i = 0; i < rowsQuantity; i++) {
        let row = document.createElement("DIV");
        row.setAttribute('class','row');

        for (let j = 0; j < fieldsQuantity; j++) {
            let field = document.createElement("DIV");
            field.setAttribute('class','field');
            field.setAttribute('id', counter);

            let textNode = document.createTextNode(counter);
    
            field.appendChild(textNode);
            row.appendChild(field);

            counter++;
        }
        document.getElementById("main").appendChild(row);
    }
}

function countFields() {
    return document.getElementsByClassName("field").length;
}

function assignEvents() {
    
}

function clickHandler(event) {
    main.addEventListener("click", openOverlay);
    closebtn.addEventListener("click", closeOverlay);
    resetbtn.addEventListener("click", closeOverlay);
    //console.log(event.target.id);
    //alert(event.target.id);
}

function openOverlay() {
    document.getElementById("overlay-background").style.height = "100%";
}

function closeOverlay() {
    document.getElementById("overlay-background").style.height = "0%";
    //alert(this.innerHTML);
}