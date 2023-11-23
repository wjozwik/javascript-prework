let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

function displayResult(argComputerMove, argPlayerMove){
	console.log('moves:', argComputerMove, argPlayerMove);
	printMessage('Mój ruch to: ' + argComputerMove);
	printMessage('Twój ruch to: ' + argPlayerMove);
	if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
	} else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Przegrywasz...');
	} else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Przegrywasz...');
	} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Przegrywasz...');
	} else if(argComputerMove == argPlayerMove){
		printMessage('Remis ;)');
	} else {
		printMessage('ODŚWIEŻ STRONĘ I WPISZ WYBRANĄ LICZBĘ O WARTOŚCI: 1, 2 LUB 3 !!!');
	}
  }

displayResult(computerMove, playerMove);