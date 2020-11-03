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
            text: ['Iframes', 'PHP to JS', 'Object Literals', 'Initializing JS']
            //example without values
        }
    }
};

let mainSelect = document.getElementById("category");
let slaveSelect = document.getElementById("choices");

mainSelect.addEventListener('change', function (e) {
    if (e.target.value !== "placeholder") {
        alert(e.target.value);
    }
});