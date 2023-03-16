const myDisplay = document.getElementById("display")

// initial message
// myDisplay.innerText = 0

// Make an array of Number buttons
let NumButtons = Array.from(document.querySelectorAll(".Nums"))

for(let i = 0; i < NumButtons.length; i++)
{
    NumButtons[i].addEventListener("click", (event)=>{console.log(event.target.innerText)})
    NumButtons[i].addEventListener("click", (event)=>{myDisplay.value = event.target.innerText})
}

// document.querySelector(".Nums").addEventListener("click", console.log("A Number was Clicked!"))