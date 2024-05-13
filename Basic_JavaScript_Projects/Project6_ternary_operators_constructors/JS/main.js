function Ride_Function() { // Ternary operation
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() { // Another ternary operation
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote" : "You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) { // A constructor 
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// Creating variables using the constructor and 'new' keyword
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Nathan = new Vehicle("Jeep", "Wrangler", 2001, "Dark Red"); // Added my own variable
function myFunction() { // Accessing one of the variables
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function myFunction1() {
    document.getElementById("New_and_This").innerHTML = "Nathan drives a " + Nathan.Vehicle_Color + " " + Nathan.Vehicle_Year + " " + Nathan.Vehicle_Make + " " + Nathan.Vehicle_Model;
}

// var class = "short";     This breaks the code. Can't name variables reserved words
// document.write(breaker);

function Movie(Title, Genre, Director, Star) { // A new constructor for making Movie objects
    this.title = Title;
    this.genre = Genre;
    this.director = Director;
    this.star = Star;
}
var Gladiator = new Movie("Gladiator", "Adventure, Action", "Ridley Scott", "Russell Crowe")
function myFunction2() {
    document.getElementById("Constructor").innerHTML = Gladiator.director;
}


function Countdown_Function() { // functions nested in other functions. Counts down when you click 100 in the html doc
    document.getElementById("Nested_Function").innerHTML = Countdown();
    function Countdown() {
        var start_point = 100;
        function Minus_one() {
            start_point -= 1;
        }
        Minus_one();
        return start_point;
    }
}