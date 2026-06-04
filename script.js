console.log("scripting started..");

const computerGuess = function computerGuess() {
    computerChoice = Math.floor(Math.random()*3 + 1)
    if(computerChoice == 1) return "stone";
    if(computerChoice == 2) return "paper";
    if(computerChoice == 3) return "scissor";
}

const userGuess = function userGuess() {
    const userChoice = prompt("guess! stone, paper or scissor")
    _userChoice = userChoice.toLowerCase().trim();
    if(_userChoice === 'stone'||_userChoice === 'paper'||_userChoice === 'scissor') return _userChoice;
    return -1
}

const decision = function decision(computerGuess,userGuess) {
    if(userGuess == -1) return 'F'
    if(computerGuess === userGuess) return "tied";
    if(computerGuess === 'stone'&& userGuess == "scissor" ) return 'C';
    if(computerGuess === 'scissor'&& userGuess == "paper" ) return 'C';
    if(computerGuess === 'paper'&& userGuess == "stone" ) return 'C';

    return 'S'
}

let count = 0;
let computerMarks = 0;
let userMarks = 0;
const ROUNDS = 5;

const mainFunction = function mainFunction() {
    _computerGuess = computerGuess()
    _userGuess = userGuess()

    const decide = decision(_computerGuess,_userGuess)
    console.log( decide);
    
    if(decide =='C') computerMarks++;
    if(decide =='S') userMarks++;

    count ++

    if(count === ROUNDS){
        if(computerMarks===userMarks){
            console.log("tied");
            return
        }else if(computerMarks>userMarks){
            console.log("computer: " + computerMarks );
            return

        }else{
            console.log("user: " + userMarks);
            return
        }
        
    }

     mainFunction()
   
}

mainFunction()





