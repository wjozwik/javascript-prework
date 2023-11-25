function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printContent(result, idElement){
	let div = document.createElement('div');
	div.innerHTML = result;
	document.getElementById(idElement).appendChild(div);
}

function clearContent(idElement){
	document.getElementById(idElement).innerHTML = '';
}