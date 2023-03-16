// grab the calculator screen
const myDisplay = document.getElementById("display")

// Make an array of Number buttons
let NumButtons = Array.from(document.querySelectorAll(".Nums"))

// Give special event listeners to Number buttons
for(let i = 0; i < NumButtons.length; i++)
{
    // Log the number clicked (for debugging)
    NumButtons[i].addEventListener("click", (event)=>{console.log(event.target.innerText)})
    // Show the number clicked on the screen
    NumButtons[i].addEventListener("click", (event)=>{myDisplay.value += event.target.innerText})
}

// Enable the functionality of the C "Clear" Button
function cleardisplay() {myDisplay.value = ""}
document.getElementById("C").addEventListener("click", cleardisplay)

// Backspace functionality
function Backspace(){myDisplay.value = myDisplay.value.substr(0, myDisplay.value.length-1) }
document.getElementById("arrow").addEventListener("click", Backspace)