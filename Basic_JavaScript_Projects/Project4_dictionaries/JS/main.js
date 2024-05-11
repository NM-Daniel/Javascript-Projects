function my_Dictionary() { // A dictionary, or Key Value Pair
    var School = {
        City: "Funky Town",
        Mascot: "Skunk",
        Colors: "White and Black",
        Enrollment: 650,
        Song: "\"Through the Odors\"", 
        Colors: "Red and Green" // If Key is repeated the value will be updated
    };
    delete School.Colors; // Can delete values from the Dictionary
    document.getElementById("Dictionary").innerHTML = School.Colors; // Will be undefined
    document.getElementById("Dictionary1").innerHTML = School.Mascot; // Will display the mascot
} 
   