function Call_Loop() { //While loop
    var Digit = "";
    var X = document.getElementById("number").value; // Sets the loop starting point
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var text = document.getElementById("sentence").innerHTML.length; // Counts the length of <p id="sentence"
document.getElementById("sentence_length").innerHTML = text;

function phraseLengthCounter() { // Counts the length of the user input
    var user_input = document.getElementById("user_phrase").value.length;
    document.getElementById("output").innerHTML = user_input;
}

var States = ["Alaska", "Hawaii", "Washington", "Oregon", "California"]; // For Loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < States.length; Y++) {
        Content += States[Y] + "<br>";
    }
    document.getElementById("List_of_Pacific_States").innerHTML = Content;
}

function array_Function() {
    var Colors = []; // Sets up an array
    Colors[0] = "Green"; // Sets the values at different indices
    Colors[1] = "Blue";
    Colors[2] = "Red";
    Colors[3] = "Yellow";
    document.getElementById("Array").innerHTML = "My favorite color is: " + Colors[0] + ".";
}

const House = { size: "1500 sq/ft", color: "white" } // Creates a const object

function constant_function() {
    House.color = "blue"; // Modifies a property in the const
    House.acreage = "3 acres"; // Adds a property with a value
    document.getElementById("Constant").innerHTML = "The house was " + House.size + " and " + House.color + ". It sat on " + House.acreage + " of land.";
}

var X = "The Global Variable";
{
    let X = "Block scope variable"; 
    document.getElementById("block_scope_test1").innerHTML = X;
}
document.getElementById("block_scope_test2").innerHTML = X;

{
    let x = multiply_function(5, 5);
    document.getElementById("multiply_func").innerHTML = "5 * 5 = " + x;
}
    
function multiply_function(a, b) { // Function that utilizes the return statement
    return a * b;
}

let song = { // Creates an object with properties and a method (actions that can be performed on objects)
    title: "'Wanted Dead or Alive'",
    artist: "Bon Jovi",
    album: "'Slippery When Wet'",
    year: "1986",
    description: function () {
        return "The song is " + this.title + " by " + this.artist + " from " + this.album + " in " + this.year + ".";
    }
};
document.getElementById("song_object").innerHTML = song.description();


// Pacific state function from earlier
var Contents = "";
function for_Loop_break() { 
    for (let i = 0; i < States.length; i++) {
        if (i === 4) { break };// the break statement "jumps out" of a loop if a certain condition is met
        Contents += States[i] + "<br>";
    }
    document.getElementById("missing_state").innerHTML = Contents;
}

// the continue statement will break one iteration in the loop (if a certain condition is met) and will continue on with the next iteration in the loop.
// can be used to skip steps
function count_loop_continue() {
    let text = "";
    for (let i = 1; i < 11; i++) {
        if (i === 5) { continue; }
        text += i + "<br>";
    }
    document.getElementById("cont").innerHTML = text;
}