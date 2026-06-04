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
    if(computerGuess === userGuess) return "tied";
    if(computerGuess === 'stone'&& userGuess == "scissor" ) return 'C';
    if(computerGuess === 'scissor'&& userGuess == "paper" ) return 'C';
    if(computerGuess === 'paper'&& userGuess == "stone" ) return 'C';

    return 'S'
}

_computerGuess = computerGuess()
_userGuess = userGuess()

console.log(decision(_computerGuess,_userGuess));




