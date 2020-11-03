let jsonString = `{ 
    "id": [1, 2],
    "location": [   
        "ОЛИМП, Кронверкский пр.49",
        "СНЛО, пер. Гривцова 14"
    ],
    "place": [
        {"auditoria": [
            "Коворкинг (ауд.511)",
            "Лекционная (ауд.501)",
            "Мастерская (ауд.512)"
            ]
        },
        {"auditoria": [
            "Основная (ауд. 413)",
            "Новая (ауд.316)"
            ]
        }
    ]
}`;

let data = JSON.parse(jsonString);

let mainSelect = document.getElementById("place");
let slaveSelect = document.getElementById("room");

mainSelect.addEventListener('change', function (e) {
    if (e.target.value !== "") {
        // alert(e.target.value);
        slaveSelect.disabled = false;

        switch (e.target.value) {
            case "OLIMP":
                clearSelect(slaveSelect);
                populateSelect(data.place[0].auditoria);
                break;
            case "SNLO":
                clearSelect(slaveSelect);
                populateSelect(data.place[1].auditoria);
                break;
            default:
                text = "Error, Sir!";
        }
    }
    else slaveSelect.disabled = true;
});

function populateSelect(target) {
    for (let i = 0; i < target.length; i++){
        let option = document.createElement("option");
        option.value = target[i];
        option.text = target[i];
        slaveSelect.appendChild(option);
    }
}

function clearSelect(target) {
    while (target.firstChild) {
        target.removeChild(target.lastChild);
    };
    let option = document.createElement("option");
    option.value = "placeholder";
    option.text = "Аудитория";
    option.disabled = true;
    option.selected = true;
    option.hidden = true;
    slaveSelect.appendChild(option);
}



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