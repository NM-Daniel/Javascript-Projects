document.write(typeof "My Choice!"); // This type of data is a string

document.write(" 50" + 10); // Coercion of two pieces of data. Prints 50 and tacks on 10 for 5010.

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0; // is NaN because you cannot divide by 0
}

document.getElementById("Test1").innerHTML = isNaN("007"); // This would be false because 007 is a number

document.getElementById("Test2").innerHTML = isNaN("A string"); // This would be true because a string isn't a number

document.write("<br><br>"); // For readability

document.write(2E310); // This will be +Infinity

document.write("<br><br>"); // For readability

document.write(-3E310); // This will be -Infinity

document.write("<br><br>"); // For readability

document.write(10 > 2); // Boolean true

document.write("<br><br>"); // For readability

document.write(60 < 30); // Boolean false

console.log(2 + 2); // Displays data in the console within the dev tools. 'Inspect' or F12 to open.

console.log(40 > 50); // Displays false in the console

document.write("<br><br>"); // For readability

document.write((5 + 5) == 10); // == compares whether the two values are equal. This is true
document.write((5 + 5) == 9); // This is false. Left value is equal to 10, right value is 9

document.write("<br><br>"); // For readability

X = 10;
Y = 10;
document.write(X === Y); // === compares data value and type. Both must be the same to be true.

X = "Tree";
Y = 3;
document.write(X === Y); // Different data types and different values. False.

X = 4;
Y = "4";
document.write(X === Y); // Different data types but same values. Still false.

X = 6;
Y = 7;
document.write(X === Y); // Same data type but different value. False.

document.write("<br><br>"); // For readability

document.write(10 > 9 && 1 < 2); // Boolean AND operator. This is true.
document.write(10 > 9 && 1 < 1); // False because 1 is not less than 1.

document.write("<br><br>"); // For readability

document.write(5 < 6 || 0 > 1); // Boolean OR. One is true so this is true.
document.write(2 > 3 || 9 < 7); // Neither are true so this is false.

function not_Function() { // It is true that 10 is not greater than 150
    document.getElementById("Not").innerHTML = !(10 > 150);
}

function not_Function1() { // It is false 7 is not greater than 6
    document.getElementById("Not1").innerHTML = !(6 < 7);
}