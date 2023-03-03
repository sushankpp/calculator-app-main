const btnZero = document.getElementById("zero");
const btnOne = document.getElementById("one");
const btnTwo = document.getElementById("two");
const btnThree = document.getElementById("three");
const btnFour = document.getElementById("four");
const btnFive = document.getElementById("five");
const btnSix = document.getElementById("six");
const btnSeven = document.getElementById("seven");
const btnEight= document.getElementById("eight");
const btnNine= document.getElementById("nine");

const btnDel = document.getElementById("del");
const btnMul = document.getElementById("multiply");
const btnDiv = document.getElementById("divide");
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnDot = document.getElementById("dot");
const reset = document.getElementById("reset");
const equalbtn = document.getElementById("equals");

const displayText = document.getElementById("display-text");

let currentValue = "";  // variable to store current value in display


btnZero.onclick = function() {
    displayText.textContent += "0";
    currentValue += "0";
}
btnOne.onclick = function() {
    displayText.textContent += "1";
    currentValue += "1";
}
btnTwo.onclick = function() {
    displayText.textContent += "2";
    currentValue += "2";
}
btnThree.onclick = function() {
    displayText.textContent += "3";
    currentValue += "3";
}
btnFour.onclick = function() {
    displayText.textContent += "4";
    currentValue += "4";
}
btnFive.onclick = function() {
    displayText.textContent += "5";
    currentValue += "5";
}
btnSix.onclick = function() {
    displayText.textContent += "6";
    currentValue += "6";
}
btnSeven.onclick = function() {
    displayText.textContent += "7";
    currentValue += "7";
}
btnEight.onclick = function() {
    displayText.textContent += "8";
    currentValue += "8";
}
btnNine.onclick = function() {
    displayText.textContent += "9";
    currentValue += "9";
}

// Event listener for delete button
btnDel.onclick = function() {
    currentValue = currentValue.slice(0 ,-1);
    displayText.textContent= currentValue;
}


btnPlus.onclick = function() {
    displayText.textContent += "+";
    currentValue += "+";
}
btnMinus.onclick = function() {
    displayText.textContent += "-";
    currentValue += "-";
}
btnMul.onclick = function() {
    displayText.textContent += "*";
    currentValue += "*";
}
btnDiv.onclick = function() {
    displayText.textContent += "/";
    currentValue += "/";
}
btnDot.onclick = function() {
    displayText.textContent += ".";
    currentValue += ".";
}


reset.onclick = function() {
    displayText.textContent = "";
    currentValue = "";
}


equalbtn.onclick = function() {
    const result = eval(currentValue);
    displayText.textContent = result;
    currentValue = result.toString();
}
