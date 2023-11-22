let guessSubmit = document.querySelector(".btn");




// 😘😘😘😘😘😘😘😘😘😘😘😘😘😘
guessSubmit.addEventListener("click",checkGuess);
//😘😘😘😘😘😘😘😘😘😘😘😘😘😘



let resetButton;

const guesses = document.querySelector(".guesses");
let guessCount = 1;
const guessField = document.querySelector(".guessField");
const randomNumber = Math.floor(Math.random()*100)+1;
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
function checkGuess(){
    /* sabse phle hum check karenge ki hamne phli baar enter to nahin kiya hai agar hmne phli baar enter kiya hai to hme ek naii line print karni padegi ki your guesses..like Previous guesses:*/
    if(guessCount===1){
        guesses.textContent = "Pichle galat zawabb : ";
    }
    // ab hame user jo bhi guess karega vo with order print karni hai ok.
    let userGuess = Number(guessField.value);
    guesses.textContent += userGuess + " ";

    if(userGuess === randomNumber){
        lastResult.textContent = "Bhadaii ho, aapko sahii sujha 🤩 ";
        lastResult.style.backgroundColor = "rgb(77, 249, 77)";
        lowOrHi.textContent = "";
        guesses.textContent = "";
        setGameOver();
        lowOrHi.textContent="";
    }
    else if(guessCount===10){
        lastResult.textContent = "!!!Khel Khatam!!!";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else{
        lastResult.textContent = "Galat zawabb😤!!!";
        lastResult.style.backgroundColor="red";
        if(userGuess < randomNumber){
            lowOrHi.textContent = "Aapko kam sujha 😒";
        }
        else if(userGuess > randomNumber){
            lowOrHi.textContent = "Aapko jayada sujha 😡";
        }
    }

    
    guessCount++;
    guessField.value="";
    guessField.focus();
}
    function setGameOver(){
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "Restart the Game";
        resetButton.setAttribute("id","restart");
        document.body.appendChild(resetButton);
        resetButton.addEventListener("click",resetGame);
    }

    function resetGame(){
        guessCount=1;
        guesses.textContent = "";
        lowOrHi.textContent="";
        lastResult.textContent="";
        // orrrrrr
        // const resetParas = document.querySelectorAll(".resultParas p");
        // for (const resetPara of resetParas) {
        //   resetPara.textContent = "";
        // }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled=false;
        guessSubmit.disabled=false;
        guessField.value="";
        guessField.focus();
        lastResult.style.backgroundColor = "white";
        randomNumber = Math.floor(Math.random()*100)+1;
    }






 