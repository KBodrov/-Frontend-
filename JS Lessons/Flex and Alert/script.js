let COLS = 3;
let ROWS = 6;

addRows(COLS, ROWS);
let numberOfFields = countFields();
//console.log(numberOfFields);
assignAlerts();

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

function assignAlerts() {
    main.addEventListener("click", alertHandler);
}

function alertHandler(event) {
    //console.log(event.target.id);
    alert(event.target.id);
}