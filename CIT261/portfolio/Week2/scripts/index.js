function calculate() {

    // get value from textbox
    var firstNumber = document.getElementById("number1").value;

    var sum = count(firstNumber);
    
    // place value in div
    document.getElementById("div1").innerHTML = firstNumber;
    
}

function count(startingNumber) {
    // TODO: add 1 to startingNumber

    var returnValue = 0;

    for (var i = 1; i <= startingNumber; i++){
        returnValue += i;

    }

    document.getElementById("div2").innerHTML = returnValue;

}