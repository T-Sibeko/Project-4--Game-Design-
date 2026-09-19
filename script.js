const choices=[
    "Rock",
    "Paper",
    "Scissors"
];

const handImages={
    Rock:"images/rock.png",
    Paper: "images/paper.png",
    Scissors:"images/scissors.png"
};

let playerScore= 0;

let opponentScore= 0;

const playerHand = document.ElementById("opponentHand");

const playerScoreDisplay = document.getElementById("playerScore");

const opponentScoreDisplay = document.getElementById("opponentScore");

const reasonText= document.getElementById("reasonText");

const rockButton= document.getElementById("rockButton");

const paperButton= document.getElementById("paperButton");

const scissorsButton= document.getElementById("scissorsButton");

const resetButton= document.getElementById("resetButton");

const clickButton= document.getElementById("clickButton");

const winButton= document.getElementById("winButton");

const loseButton= document.getElementById("loseButton");

const drawButton= document.getElementById("drawButton");


function playGame(playChoice) {
    playSound(clickSound);
    const opponentChoice = getOpponentChoice();
    playerHand.src = handImages[playChoice];
    opponentHand.src = handImages[opponentChoice];

    if (playChoice===opponentChoice) {
        resultText.textContent = "DRAW!";
        reasonText.textContent =`Both players chose ${playerChoice}.`;
        playSound(drawSound);    
    }

    else if (
        (playChoice==="Rock" && opponentChoice===="Scissors") || (playChoice==="Paper" && opponentChoice ==="Rock") ||
        (playChoice==="Scissor" && opponentChoice==="Paper"))

        {
            playerScore++;
            resultText.reasonText= "YOU WIN!";
            reasonText.textContent= `${opponentChoice} beats ${opponentChoice}.`;
            playSound(winSound);
        }

        else{
            opponentScore++;
            reasonText.textContent="YOU LOSE!";
            reasonText.textContent=`${opponentChoice} beats ${playerChoice}.`;
            playSound(loseSound);
        }

        updateScore();   
}

function getOpponentChoice() {
    const randomNumber = Math.random();

    const randomIndex = Math.floor(randomNumber*choices.length);

    return choices [randomIndex];
}

function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    opponentScoreDisplay.textContent= opponentScore;
}

function playSound(sound){
    if(sound){
        sound.currrentTime = 0;
        sound.play().catch(()=>{});
    }
}

rockButton.addEventListener("click", function(){
    playGame("Rock");
});

paperButton.addEventListener("click", function(){
    playGame("Paper");
});

scissorsButton.addEventListener("click", function(){
    playGame("Scissors");
});

resetButton.addEventListener("click", function() {
    playerScore = 0;
    opponentScore = 0;
    updateScore();
    playerHand.src = handImages.Rock;
    opponentHand.src = handImages.Rock;

    resultText.textContent = "MAKE YOU MOVE";
    resultText.textContent = "Chose Rock, Paper or Sciccors";
});