
const buttons = document.querySelectorAll("button")

let count = 0;
let computerMarks = 0;
let userMarks = 0;
let winner = 'Non:';
const ROUNDS = 5;


const computerGuess = function computerGuess() {
    computerChoice = Math.floor(Math.random()*3 + 1)
    if(computerChoice == 1) return "stone";
    if(computerChoice == 2) return "paper";
    if(computerChoice == 3) return "scissors";
}

const decision = function decision(computerGuess,userGuess) {
    if(userGuess == -1) return 'F'
    if(computerGuess === _userGuess) return "tied";
    if(computerGuess === 'stone'&& _userGuess == "scissors" ) return 'C';
    if(computerGuess === 'scissors'&& _userGuess == "paper" ) return 'C';
    if(computerGuess === 'paper'&& _userGuess == "stone" ) return 'C';

    return 'S'
}

const mainFunction = function mainFunction(_userGuess) {
    _computerGuess = computerGuess()

    const decide = decision(_computerGuess,_userGuess)

    console.log( _userGuess);
    console.log(_computerGuess);
    
    if(decide =='C') computerMarks++;
    if(decide =='S') userMarks++;

    count ++

    updateGui()
    

    if(count >= ROUNDS){
        if(computerMarks===userMarks){
            computerMarks = 0
            userMarks = 0
            count = 0

            winner = ' TIED'
            return

        }else if(computerMarks>userMarks){
            winner = ' Comp: '
            computerMarks = 0
            userMarks = 0
            count = 0
            return

        }else{
            winner = ' User: '
            computerMarks = 0
            userMarks = 0
            count = 0
            return
        }
        
    }
   
}


const logger = (winnerName) => {
    const winnerDiv = document.querySelector(".winner-div");
    if (!winnerDiv) return;
    winnerDiv.innerHTML = `<p class="log">Winner is: <span class="winner">${winnerName}</span></p>`;
};

const updateGui = () => {

    const _compMarks = document.querySelector(".comp-marks span");
    const _userMarks = document.querySelector(".user-marks span");
    const _winner = document.querySelector(".winner-div .winner");
    const percent = document.querySelector(".winner-div .percent");
    const counter = document.querySelector(".container .counter h4");

    _compMarks.textContent = computerMarks;
    _userMarks.textContent = userMarks;

    if (_compMarks) _compMarks.textContent = computerMarks;
    if (_userMarks) _userMarks.textContent = userMarks;
    if(counter) counter.textContent = count;
    
    _winner.textContent = winner;

    if(count == ROUNDS){
        if(winner == ' User: '){
            percent.textContent = (userMarks/ROUNDS)*100;

        }else if(winner = ' Comp: '){
            percent.textContent = (computerMarks/ROUNDS)*100;
        }else{
            percent.textContent = 0;

        }
        
    
    }
        
    }
   

    console.log(winner);
    // logger(winner)


buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        _userGuess = button.id
        mainFunction(_userGuess)
        
    })
    });





