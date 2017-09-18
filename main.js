for (var i = 0; i<9; i++){
	document.getElementsByClassName('tablero').insertAdjacentHTML('afterend','<container class="Region" id='+i +'></container> ');
	for (var j =0; j<9; j++){
		document.getElementById(i).insertAdjacentHTML('afterend','<container class="Celda" id='+ i + '-' + j + '></container> ');
	}
}