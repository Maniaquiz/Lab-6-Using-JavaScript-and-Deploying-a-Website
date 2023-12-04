/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into
 JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/


/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// Some Elements that will be used by the functions:

// INSERT YOUR CODE HERE

let modelNameElement = document.getElementById("model-text");
let durationElement = document.getElementById("duration-text");


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
let costLabel = document.getElementById("calculated-cost");

function recalculate() {
    
    let new_total_cost = 0;
    let duration = parseInt(durationElement.innerText); 
    // html target is the 0 using .innerText= <span id = "duration-text">0</span>
    // parseInt = parses a string argument and returns an integer

    let modelName = modelNameElement.innerText.trim(); 
    // html target is the Model XYZ using .innerText <span id = "model-text">Model XYZ</span>

    if (modelName === "Model XYZ") {
        new_total_cost = duration * 100;
    } else if (modelName === "Model CPRG") {
        new_total_cost = duration * 213;
    }

    costLabel.innerText = new_total_cost.toFixed(2); }   
    // html target is the 0.00 using .innerText <span id = "calculated-cost">0.00</span>
    // which is then multiplied by a number depending on the modelName
    // toFixed(2) - represents the 2 decimal places it would display

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button
 (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the
 model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG",
    and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", 
    and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run
 automatically whenever the pseudo-button is clicked: */    
//SwitchModelButtonElement.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE
let SwitchModelButtonElement = document.getElementById('model-button');

function changeModel() {
    let modelName = modelNameElement.innerText.trim();

    if (modelName === "Model CPRG") {
        modelNameElement.innerText = "Model XYZ";
    } else {
        modelNameElement.innerText = "Model CPRG";
    }
    // this block of code starting from IF targets the value inside of this span element below 
    // <span id = "model-text">Model XYZ</span> ** it changes when clicked
    recalculate();
}

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
let ChangeDurationElement = document.getElementById("duration-button");

function changeDuration() {
    let newDuration = prompt("Please enter the duration");

    /*if (isNaN(newDuration)) {
        alert("Error: Please enter a valid number for the duration.");
        newDuration = prompt("Please enter the duration");
    } else {
        
        if (newDuration === "") {
            newDuration = "0";
        }*/

        if (newDuration === "" || isNaN(newDuration)) {
            newDuration = "0";
        }
        
    
    durationElement.innerText = newDuration;
    // this code then targets the 0 on this span element *** <span id = "duration-text">0</span>
    
    recalculate();
        }
    
SwitchModelButtonElement.addEventListener("click", changeModel);
ChangeDurationElement.addEventListener('click', changeDuration);

