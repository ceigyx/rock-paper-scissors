function game(arg1, arg2) {

    //Tracking
    var options = ['rock', 'paper', 'scissors'];
    var playerPoints = 0;
    var computerPoints = 0;
    var draws = 0;
    var roundWin = '';

    //Params defaults
    var playerPreSelect = 'none';
    var rounds = 5;

    //validate & set params
    if (arg1 && arg2) {
        if (!isNaN(arg1)) {rounds = arg1; playerPreSelect = arg2;}
        else {playerPreSelect = arg1; rounds = arg2;}
    }
    else {
        if (arg1 && !isNaN(arg1)) {rounds = arg1;}
        else {playerPreSelect = arg1}
    }

    //Gameplay input and logic functions
    function computerPlay() {
        return options[Math.floor(Math.random() * 3)];
    }

    function playerSelection() {
        if (options.indexOf(playerPreSelect) !== -1) {
            return playerPreSelect;
        }
        var input = prompt('Choose! - Rock or Paper or Scissors?').toLowerCase();
        while (options.indexOf(input) === -1) {
        input = prompt('Wrong choice, Try again! - Rock or Paper or Scissors?').toLowerCase();
        }
        return input;
    }

    function playRound() {
        var player = playerSelection();
        var computer = computerPlay();
        console.log('player chose: ' + player);
        console.log('computer chose: ' + computer);
        var diff = player.length - computer.length;
        if (diff === 0) {
            draws++;
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
    console.log('player wins: ' + playerPoints);
    console.log('computer wins: ' + computerPoints);
    console.log('draws: ' + draws);

    if (playerPoints === computerPoints) {
        return 'game draw';
    }
    else if (playerPoints > computerPoints) {
        return 'you won the game';
    }
    return 'you lost the game';

}