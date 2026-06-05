const buttons = document.querySelectorAll("button");

let count = 0;
let computerMarks = 0;
let userMarks = 0;
let winner = "None";
let finalPercent = 0;

const ROUNDS = 5;

function computerGuess() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) return "stone";
    if (computerChoice === 2) return "paper";
    return "scissors";
}

function decision(computerChoice, userChoice) {
    if (computerChoice === userChoice) return "T";

    if (
        (computerChoice === "stone" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "stone")
    ) {
        return "C";
    }

    return "U";
}

function mainFunction(userChoice) {
    const magicPar = document.querySelector(".magic-par");

    const computerChoice = computerGuess();
    const result = decision(computerChoice, userChoice);

    if (result === "C") {
        computerMarks++;
    } else if (result === "U") {
        userMarks++;
    }

    count++;

    updateGui();

    if (count >= ROUNDS) {
        let winnerScore = 0;

        if (computerMarks === userMarks) {
            winner = "Tied";
        } else if (computerMarks > userMarks) {
            winner = "Computer";
            winnerScore = computerMarks;
        } else {
            winner = "User";
            winnerScore = userMarks;
        }

        finalPercent =
            winner === "Tied"
                ? 0
                : ((winnerScore / ROUNDS) * 100).toFixed(0);

        if (magicPar) {
            magicPar.classList.add("magic-par");

            if (winner === "Tied") {
                magicPar.textContent = "It's a tie!";
            } else {
                magicPar.textContent = `${winner} won the game!`;
            }
        }

        updateGui();

        // Reset game after showing result
        setTimeout(() => {
            count = 0;
            computerMarks = 0;
            userMarks = 0;
            winner = "None";
            finalPercent = 0;

            updateGui();

            if (magicPar) {
                magicPar.textContent = "";
            }
        }, 3000);
    }
}

function updateGui() {
    const compMarksElement = document.querySelector(".comp-marks span");
    const userMarksElement = document.querySelector(".user-marks span");
    const winnerElement    = document.querySelector(".winner-div .winner");
    const percentElement   = document.querySelector(".winner-div .percent");
    const counterElement   = document.querySelector(".container .counter h4");

    if (compMarksElement) {
        compMarksElement.textContent = computerMarks;
    }

    if (userMarksElement) {
        userMarksElement.textContent = userMarks;
    }

    if (winnerElement) {
        winnerElement.textContent = winner;
    }

    if (percentElement) {
        percentElement.textContent = finalPercent +"%";
    }

    if (counterElement) {
        counterElement.textContent = count;
    }
}

updateGui();

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        mainFunction(button.id);
    });
});