
addField();
let numberOfFields = countFields();
console.log(numberOfFields);
assignAlerts();

function addField() {
    let row = document.createElement("DIV");
    row.setAttribute('class','row');

    let field = document.createElement("DIV");
    field.setAttribute('class','field');
    field.setAttribute('id', '13');

    let textNode = document.createTextNode("One");
    
    field.appendChild(textNode);
    row.appendChild(field);

    document.getElementById("main").appendChild(row);
}

function countFields() {
    return document.getElementsByClassName("field").length;
}

function assignAlerts() {
    for (let number = 1; number < numberOfFields+1; number++) {
        document.getElementById(number).onclick = function() {myAlert(number)};
    }
    
}

function myAlert(string) {
    alert(string);
}