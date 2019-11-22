var options = ['rock', 'paper', 'scissors'];
var playerPoints = 0;
var computerPoints = 0;


function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function playerSelection() {
    let input = prompt('Choose! - Rock or Paper or Scissors?').toLowerCase();
    while (options.indexOf(input) === -1) {
    input = prompt('Wrong choice, Try again! - Rock or Paper or Scissors?').toLowerCase();
    }
    return input;
}

function playRound() {
    let player = playerSelection().length;
    let computer = computerPlay().length;
    let diff = player - computer;
    console.log(player + ' vs ' + computer);
    if (player === computer) {
        return 'draw';
    }
    else if ((diff === -4) || (diff === 3) ||(diff === 1)) {
        playerPoints++;
        return 'player';
    }
    else {
        computerPoints++;
        return 'computer';
    }
}