function myFunction() {
    var answer1 = "The Red answer";
    var answer2 = "The Blue answer";
    document.getElementById("Red_button").innerHTML = answer1;// Would like to figure out how to make only one
    document.getElementById("Blue_button").innerHTML = answer2; //button give you the answer when it's clicked.
}

function concatenateFunction() {    //Uses the += operator. At this point I am not sure how to utilize this
    var str = "This is the first part"; //differently than the example given in the LMS.
    str += " and this is the second part.";
    document.getElementById("concatenate").innerHTML = str;
}