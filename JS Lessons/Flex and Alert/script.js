let numberOfFields = document.getElementsByClassName("field").length;
console.log(numberOfFields);

for (let number = 1; number < numberOfFields+1; number++) {
    document.getElementById(number).onclick = function() {myAlert(number)};
}

function myAlert(string) {
    alert(string);
}