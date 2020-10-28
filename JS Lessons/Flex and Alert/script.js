for (let number = 1; number < 10; number++) {
    document.getElementById(number).onclick = function() {myAlert(number)};
}

function myAlert(string) {
    alert(string);
}