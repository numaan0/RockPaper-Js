


function getComputerChoice(){
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]

    return computerChoice

}

function getResult(playerChoice, computerChoice){
    let score;

    if (playerChoice === computerChoice){
        score = 0
    }else if(playerChoice==="Rock" && computerChoice ==="Scissors"){
        score = 1
    }
    else if(playerChoice==="Paper" && computerChoice ==="Rock"){
        score = 1
    }
    else if(playerChoice==="Scissors" && computerChoice ==="Paper"){
        score = 1
    }
    else{
        score = -1
    }
    return score
}
const totalScore= { computerScore:0, playerScore: 0}
function showResult(score, playerChoice, computerChoice){
    let result = document.getElementById('result')

    switch(score){
        case -1:
            result.innerText = `You loose!`
            break;
        case 0:
            result.innerText = `It's a draw!`
            break;
        case 1:
            result.innerText = `You Win`
            break;
    }
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `Your score: ${totalScore['playerScore']}`
    hands.innerText = `👨: ${playerChoice} 🤖: ${computerChoice} `
}

function onClickRPS(playerChoice){
    const computerChoice = getComputerChoice()

    const score = getResult(playerChoice.value, computerChoice)
    totalScore['playerScore']+=score
    showResult(score, playerChoice.value, computerChoice)
}

function playGame(){
    let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton =>{
        rpsButton.onclick =()=> onClickRPS(rpsButton)
    })

    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
}

function endGame(){
    let playerScore= document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}

playGame()