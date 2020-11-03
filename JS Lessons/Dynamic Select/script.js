let dataList = {
    'choices': {
        js: {
            text: ['Scrolling Divs', 'Tooltips', 'Rotate Images', "Scrollers", "Banner Rotator"], 
            value: ['scroll', 'tooltips', 'rotate', 'scrollers', 'banner']
        },
        php: {
            text: ['Random Image', 'Form Class', 'Table Class', 'Order Form'],
            value: ['random', ' form', 'table', 'order']
        },
        tuts: {
            text: ['Iframes', 'PHP to JS', 'Object Literals', 'Initializing JS'],
            value: ['frames', 'ptoj', 'literals', 'init']
        }
    }
};

let mainSelect = document.getElementById("category");
let slaveSelect = document.getElementById("choices");

mainSelect.addEventListener('change', function (e) {
    if (e.target.value !== "") {
        // alert(e.target.value);
        slaveSelect.disabled = false;

        switch (e.target.value) {
            case "js":
                clearSelect(slaveSelect);
                populateSelect(dataList.choices.js);
                break;
            case "php":
                clearSelect(slaveSelect);
                populateSelect(dataList.choices.php);
                break;
            case "tuts":
                clearSelect(slaveSelect);
                populateSelect(dataList.choices.tuts);
                break;
            default:
                text = "Error, Sir!";
        }
    }
    else slaveSelect.disabled = true;
});

function populateSelect(target) {
    for (let i = 0; i < target.text.length; i++){
        let option = document.createElement("option");
        option.value = target.value[i];
        option.text = target.text[i];
        slaveSelect.appendChild(option);
    }
}

function clearSelect(target) {
    while (target.firstChild) {
        target.removeChild(target.lastChild);
    };
    let option = document.createElement("option");
    option.value = "placeholder";
    option.text = "Make your choice, please!";
    option.disabled = true;
    option.selected = true;
    option.hidden = true;
    slaveSelect.appendChild(option);
}