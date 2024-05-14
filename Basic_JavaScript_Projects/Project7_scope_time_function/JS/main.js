var X = 50; // A global variable

function localVariable() { // Takes a global variable and uses it with a local variable
    var Y = 40;
    document.write(X + Y);
}

function localVariable_error() { // Attempts to use a local variable from another function. Does not work.
    document.write(X - Y);
}

localVariable(); // Calling the functions
localVariable_error(); // Error can be seen in console

function dateMethod() { // If the hour is after 0500 and before 1200 it will display 'Good Morning'
    if (new Date().getHours() < 12 && new Date().getHours() > 5) {
        document.getElementById("method").innerHTML = "Good Morning";
    }
}

if (1 < 2) { // Not sure why document.write will not display in the window
    document.write("The left number is small than the right number");
}

function if_function() { // I couldn't use document.write here either. Or simply calling the function like in Line 12
    if (X > 60 || new Date().getHours() > 7) {
        document.getElementById("ifFunction").innerHTML = "Now it works";
    }
}

function Name_Check() { // A function with an if and else statement
    var Name = document.getElementById("name_box").value.toLowerCase(); // makes the input not case sensitive
    if (Name == "nathan") {
        Greeting = "Hello, Nathan";
    }
    else {
        Greeting = "You are not Nathan";
    }
    document.getElementById("answer").innerHTML = Greeting;
}

function Time_function() { // function with an else if statement
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}