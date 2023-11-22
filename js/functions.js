function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

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