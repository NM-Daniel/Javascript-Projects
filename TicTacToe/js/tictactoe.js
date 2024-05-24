// this variable will keep track of whose turn it is
let activePlayer = 'X';
// this array will sotre array of moves. To determine win conditions.
let selectedSquares = [];

// Places x or o in a square.
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    // .some() method is used to check each element of the selectSquare array.
    // to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // 'select' retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        // this condition checks who's turn it is
        if (activePlayer === 'X') {
            //If activePlayer is euqal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x2.png")';
            //Active player may only be 'X' or 'O' thus if not X it must be O
        }
        else {
            select.style.backgroundImage = 'url("images/o22.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        // This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'O'
            activePlayer = 'O';
            //if active player is anything other than 'X'
        }
        else {
            //Change the active player to 'X'
            activePlayer = 'X';
        }

        //This function plays placement sound
        audio('./media/place2.mp3');
        //This condition checks to see if it is the computers turn.
        if (activePlayer === 'O') {
            // This function disables clicking for computers turn
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }
    //This function results in a random square being selected by the computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawLine functino is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    //This will check every possible end result of tic tac toe on a grid
    // numbered 0-8 with an "X" or "O" attached to it.
    //X's win conditions:
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    //O's win conditions:
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of above conditions are met and
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('./media/tie2.mp3');
        //This function sets a .5 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 500);
    }

    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for presence of 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        /* if the variables we pass are included in our selectedSquares array, then
        True is returned and the else if condition will execute the drawLine() function */
        if (a === true && b === true && c === true) { return true; }
    }
}

//function makes our body element unclickable. Called earlier in the program
function disableClick() {
    //Makes body unclickable:
    body.style.pointerEvents = "none";
    //This makes our body clickable again after 1 second:
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 500);
}

// This function takes a string parameter of the path set earlier
// for the placement sound('./media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound
    audio.play();
}

//This function utlizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses the HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //This line gives access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of the line's x axis is.
    let x1 = coordX1,
        // start of line's y axis
        y1 = coordY1,
        // end of line's x axis
        x2 = coordX2,
        // end of line's y axis
        y2 = coordY2,
        // this variable stores temporary x axis data we update in animation loop
        x = x1,
        // stores temporary y axis data we update in animation loop
        y = y1;
    
    //This function interacts with the canvas
    function animateLineDrawing() {
        //this variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //this metho starts a new path.
        c.beginPath();
        //This method moves to a starting point in the line.
        c.moveTo(x1, y1);
        //This method indicates the end point in the line.
        c.lineTo(x, y);
        //this method sets the width of the line
        c.lineWidth = 10;
        //this method sets the color of the line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //this method draws everything laid out above
        c.stroke();
        //This condition checks if we've reached the endpoints.
        if (x1 <= x2 && y1 <= y2) {
            //This condition adds 10 to the previous end x endpoint.
            if (x < x2) { x += 10; }
            //This condition adds 10 to the previous end y endpoint.
            if (y < y2) { y += 10; }
            //This condition is similar to the one above.
            //This is necessary for the 6, 4, 2 win conditions.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //This condition is similar to the one above
        //This is necessary for the 6, 4, 2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //This function clears our canvas after our win line is drawn.
    function clear() {
        //This line starts the animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //This line clears the canvas
        c.clearRect(0, 0, 608, 608);
        //This line stops the animation loop
        cancelAnimationFrame(animationLoop);
    }
    //This line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sounds.
    audio('./media/tada.mp3');
    //This line calls our main animation loop.
    animateLineDrawing();
    //This line waits 1 second then clears canvas, resets game, and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//This function resets the game in the event of a tie or win
function resetGame() {
    //This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        //This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}