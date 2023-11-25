function playGame(playerInput){
  clearMessages();
  
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  function getMoveName(argMoveId){
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
  
  let computerMove = getMoveName(randomNumber);

  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  function displayResult(argComputerMove, argPlayerMove){
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
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

let computerScore = 0;
let playerScore = 0;


