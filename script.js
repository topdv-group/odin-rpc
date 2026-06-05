
const buttons = document.querySelectorAll("button")

let count = 0;
let computerMarks = 0;
let userMarks = 0;
const ROUNDS = 5;

const computerGuess = function computerGuess() {
    computerChoice = Math.floor(Math.random()*3 + 1)
    if(computerChoice == 1) return "stone";
    if(computerChoice == 2) return "paper";
    if(computerChoice == 3) return "scissor";
}

const decision = function decision(computerGuess,userGuess) {
    if(_userGuess == -1) return 'F'
    if(computerGuess === _userGuess) return "tied";
    if(computerGuess === 'stone'&& _userGuess == "scissor" ) return 'C';
    if(computerGuess === 'scissor'&& _userGuess == "paper" ) return 'C';
    if(computerGuess === 'paper'&& _userGuess == "stone" ) return 'C';

    return 'S'
}

const mainFunction = function mainFunction(_userGuess) {
    _computerGuess = computerGuess()

    const decide = decision(_computerGuess,_userGuess)
    console.log( decide);
    console.log( _userGuess);
    console.log(_computerGuess);
    console.log(count);
    
    if(decide =='C') computerMarks++;
    if(decide =='S') userMarks++;

    count ++

    if(count >= ROUNDS){
        if(computerMarks===userMarks){
            computerMarks = 0
            userMarks = 0
            count = 0

            console.log("tied");
            return

        }else if(computerMarks>userMarks){
            computerMarks = 0
            userMarks = 0
            count = 0
            console.log("computer: " + computerMarks );
            return

        }else{
            console.log("user: " + userMarks);
            computerMarks = 0
            userMarks = 0
            count = 0
            return
        }
        
    }
   
}

buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        _userGuess = button.id
        mainFunction(_userGuess)
        console.log(button.id);
    })
    });





