let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");


const calculateDoggieAge = (humanAge) => {
let doggieAge = humanAge * 7;
result.innerHTML = "Your doggie is " + doggieAge + " years old in human years!";
console.log ("Your doggie is " + doggieAge + " years old in human years!");   
}


equalsButton.addEventListener("click", () => { 
 let userInput = input.value;
 console.log (userInput);
calculateDoggieAge(Number(userInput));
});

clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";
}