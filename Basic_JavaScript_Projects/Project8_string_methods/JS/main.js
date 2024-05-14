function the_concat_method() { // string concat() method.
    var part1 = "This string ";
    var part2 = "is broken up in ";
    var part3 = "pieces but will be ";
    var part4 = "restored with concate method.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_Method() { // slice() method. Will (27, 33) indicates the characters in the string that will be cut and displayed.
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33); // "Johnny"
    document.getElementById("Slice").innerHTML = Section;
}

document.write("<br>"); // For readability

function slice_Method1() {
    var Sentence = "The quick brown Fox jumped over the lazy river.";
    var Section = Sentence.slice(16,20); // section starts just after the 6th character
    document.write(Section);
}

slice_Method1(); // Call slice function so the slice displays

function capitalizeFunction() { // to Uppercase() capitalizes the letters in the string.
    var Upperizing = document.getElementById("capitalizing").innerHTML; //Could put toUpperCase after .innerHTML as well
    document.getElementById("capitalizing").innerHTML = Upperizing.toUpperCase(); // and remove toUpperCase from here.
}

var text = "It'll take you forever to count out the location of the word you're looking for."; // searches for the first instance of "word"
var index = text.search("word");
document.getElementById("search").innerHTML = index;

function string_Method() { // toString() converts integer to string
    var X = 200;
    document.getElementById("str_meth").innerHTML = X.toString() + " now a string";
}

function precision_Method() { // Displays PI using 8 digits
    var X = Math.PI;
    document.getElementById("precision").innerHTML = X.toPrecision(8);
}

document.write("<br>"); // For readability

let I = 23.667777755; // toFixed() returns a number with specified # of decimals.
document.write(I.toFixed(4));

document.write("<br>"); // For readability

let M = -100; // valueOf() returns the primitive value 
document.write(M.valueOf());