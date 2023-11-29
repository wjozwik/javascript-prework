{
  const playGame = function (playerInput){
    clearMessages();
    
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const getMoveName = function (argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      } else if(argMoveId == 2){
        return 'papier';
      } else if(argMoveId == 3){
        return 'nożyce';
      }
      printMessage('Nie znam ruchu o id "' + argMoveId + '".');
      return 'nieznany ruch';
    }
    
    const computerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    const displayResult = function (argComputerMove, argPlayerMove){
      console.log('moves:', argComputerMove, argPlayerMove);
      printMessage('Mój ruch to: ' + argComputerMove);
      printMessage('Twój ruch to: ' + argPlayerMove);
      if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        playerScore++;
      } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz...');
        computerScore++;
      } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz...');
        computerScore++;
      } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
        playerScore++;
      } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
        playerScore++;
      } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrywasz...');
        computerScore++;
      } else if(argComputerMove == argPlayerMove){
        printMessage('Remis ;)');
      } else {
        printMessage('ODŚWIEŻ STRONĘ I WPISZ WYBRANĄ LICZBĘ O WARTOŚCI: 1, 2 LUB 3 !!!');
      }
    }
    displayResult(computerMove, playerMove);

    clearContent('result')
    printContent('Wynik', 'result')
    printContent(playerScore + " - " + computerScore, 'result');
    console.log('computerScore: ' + computerScore + " - playerScore: " + playerScore);
    gameEnd(computerScore, playerScore);
  }

  const hideElement = function (elementId){
    document.getElementById(elementId).classList.add('invisible');
  };

  const unHideElement = function (elementId){
    document.getElementById(elementId).classList.remove('invisible');
  };

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
    unHideElement('messages');
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
    unHideElement('messages');
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
    unHideElement('messages');
  });

  const gameRefresher = function () {
    document.getElementById('refresher').addEventListener('click', function() {
      location.reload();
    });
  };
  
  gameRefresher();
  
  let computerScore = 0;
  let playerScore = 0;

  const buttonsReplacement = function () {
    hideElement('play-rock');
    hideElement('play-paper');
    hideElement('play-scissors');
    unHideElement('refresher');
  };

  const gameEnd = function (argComputerScore, argPlayerScore){
    if(argComputerScore == 3){
      clearContent('messages');
      printContent('<span>PRZEGRANA</span>', 'messages');
      buttonsReplacement();
    } else if(argPlayerScore == 3){
      clearContent('messages');
      printContent('<span>WYGRANA</span>', 'messages');
      buttonsReplacement();
    }
  }
}

