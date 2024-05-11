function addition_Function() { // addition function
    var addition = 2 + 2;
    document.getElementById("Math+").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() { // subtraction function
    var subtraction = 5 - 4;
    document.getElementById("Math-").innerHTML = "5 - 4 = " + subtraction;
}

function multiplication() { // multiplication function
    var simple_Math = 6 * 8;
    document.getElementById("Math*").innerHTML = "6 * 8 = " + simple_Math;
}

function division() {  // division function
    var div = 48 / 6;
    document.getElementById("Math/").innerHTML = "48 / 6 = " + div;
}

function multiple_Math() {  // multiple operator function
    var simple_Math = (1 + 1) * 10 / 2 - 5;
    document.getElementById("more_Math").innerHTML = "1 plus 1, times 10, divided in half minus 5 equals " + simple_Math;
}

function mod_Op() {  // modulus operator function
    var modulus = 30 % 9;
    document.getElementById("Mod").innerHTML = "30 divided by 9 has a remainder of: " + modulus;
}

function negation_Operator() {  // Negation function
    var x = 10;
    document.getElementById("negation").innerHTML = -x;
}

var Y = 5;  // Increment
Y++;
document.write(Y);

document.write("<br>"); // Line break for readability

var Z = 8; // Decrement
Z--;
document.write(Z);

window.alert(Math.random() * 100); // Creates a window popup with a random number from 0-100

document.write("<br>"); // Line break for readability

document.write(Math.SQRT2); // Square root of 2 math property

document.getElementById("math-Round").innerHTML = Math.round(11.5); // Math round method. Rounds a number to the nearest integer