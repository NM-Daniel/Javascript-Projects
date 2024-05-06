window.alert("Hello, world!"); // First popup

document.write("hello.... planet!"); // Prints this message to the document.

var x = "This is a string that will put an alert that says" + //Creates a variable called "x" that is two parts
    " \"This is a string that will put an alert that says\""; //concatenated together.

document.write(x); //Prints the string variable that is called x

window.alert(x); // The second popup message. The message will be the string value of the variable named x

var b = "A concatenated" + " String." //creates a new variable with concatenated strings.

document.write(b); // Prints the value of the varible called b

var Family = "The Maupins", third_child = "Nathan", Dog_1 = "Karibu"; //Assigning three variables at once.

document.write(Dog_1); //Prints one of variables that was just created in the previous line

document.write(b + x); //Prints the b variable and then immediately prints the x variable.

function My_First_Function() { //This is a function that will make the button in the HTML file do something
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}

var Sent1 = "This is the beginning of the string";

var Sent2 = " and this is the end of the string";

document.write(Sent1 + Sent2); //Concatenating Sent1 and Sent2 together.

document.write(4 + 8); //A statement that contains an expression (4 + 8)