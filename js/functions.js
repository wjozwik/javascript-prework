const printMessage = function (msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function (){
	document.getElementById('messages').innerHTML = '';
}

const printContent = function (result, idElement){
	let div = document.createElement('div');
	div.innerHTML = result;
	document.getElementById(idElement).appendChild(div);
}

const clearContent = function (idElement){
	document.getElementById(idElement).innerHTML = '';
}