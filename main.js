for (var i = 0; i<9; i++){
	document.getElementById('tablero').innerHTML ='<div class="Region" id='+i +'></div> ';
	for (var j =0; j<9; j++){
		document.getElementById(i).insertAdjacentHTML('afterend','<div class="Celda" id='+ i + '-' + j + '></div> ');
	}
}