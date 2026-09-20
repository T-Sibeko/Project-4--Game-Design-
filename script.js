const choices=[
    "Rock",
    "Paper",
    "Scissors"
];

const handImages={
    Rock:"rock.png",
    Paper: "paper.png",
    Scissors:"scissors.png"
};

let playerScore= 0;

let opponentScore= 0;

const playerHand = document.getElementById("playerHand");

const opponentHand = document.getElementById("opponentHand");

const playerScoreDisplay = document.getElementById("playerScore");

const opponentScoreDisplay = document.getElementById("opponentScore");

const reasonText= document.getElementById("reasonText");

const resultText= document.getElementById("reasultText");

const rockButton= document.getElementById("rockButton");

const paperButton= document.getElementById("paperButton");

const scissorsButton= document.getElementById("scissorsButton");

const resetButton= document.getElementById("resetButton");

const clickSound= document.getElementById("clickSound");

const winSound= document.getElementById("winSound");

const loseSound= document.getElementById("loseSound");

const drawSound= document.getElementById("drawSound");


function playGame(playChoice) {
    playSound(clickSound);
    const opponentChoice = getOpponentChoice();
    playerHand.src = handImages[playChoice];
    opponentHand.src = handImages[opponentChoice];

    if (playChoice===opponentChoice) {
        resultText.textContent = "DRAW!";
        reasonText.textContent =`Both players chose ${playChoice}.`;
        playSound(drawSound);    
    }

    else if (
        (playChoice==="Rock" && opponentChoice==="Scissors") || (playChoice==="Paper" && opponentChoice ==="Rock") ||
        (playChoice==="Scissors" && opponentChoice==="Paper"))

        {
            playerScore++;
            resultText.textContent= "YOU WIN!";
            reasonText.textContent= `${playChoice} beats ${opponentChoice}.`;
            playSound(winSound);
        }

        else{
            opponentScore++;
            resultText.textContent="YOU LOSE!";
            reasonText.textContent=`${opponentChoice} beats ${playChoice}.`;
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
        sound.currentTime = 0;
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
    reasonext.textContent = "Chose Rock, Paper or Scissors";
});