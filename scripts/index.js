function game(ans, numOfRounds) {

    //Tracking and Setup
    const options = ['rock', 'paper', 'scissors'];
    var playerPoints = 0;
    var computerPoints = 0;
    var roundWin = '';
    var debug = ans;
    var rounds = 5;
    if (numOfRounds) { rounds = numOfRounds};

    //Gameplay input and logic functions
    function computerPlay() {
        return options[Math.floor(Math.random() * 3)];
    }

    function playerSelection() {
        if (options.indexOf(debug) !== -1) {
            return debug;
        }
        let input = prompt('Choose! - Rock or Paper or Scissors?').toLowerCase();
        while (options.indexOf(input) === -1) {
        input = prompt('Wrong choice, Try again! - Rock or Paper or Scissors?').toLowerCase();
        }
        return input;
    }

    function playRound() {
        let player = playerSelection();
        let computer = computerPlay();
        console.log('player chose: ' + player);
        console.log('computer chose: ' + computer);
        let diff = player.length - computer.length;
        if (diff === 0) {
            roundWin = 'draw';
        }
        else if ((diff === -4) || (diff === 3) ||(diff === 1)) {
            playerPoints++;
            roundWin = 'player';
        }
        else {
            computerPoints++;
            roundWin = 'computer';
        }
        return roundWin;
    } 

    //Main process
    for (var i = 0; i < rounds; i++)
    {
        playRound();
        console.log('round ' + (i + 1) + ' winner: ' + roundWin);
        console.log('----------------------------------------------');
    }

    //Results
    console.log('player wins: ' + playerPoints)
    console.log('computer wins: ' + computerPoints)

    if (playerPoints > computerPoints) {
        return 'you won the game';
    }
    return 'you lost the game';

}