function numeros(event, i, j) {
	x = event.clientX;
	y = event.clientY;
	
	console.log(x+' '+y); // Muestra por consola las coordenadas del mouse
	
	cell = document.getElementById('tablero');
	table = document.getElementById('target');

	if (table == null) {
		cell.insertAdjacentHTML('afterend', '<table class="teclado" id="target"> </table>');
		table = document.getElementById('target');


		table.style.top = (y + 20) + 'px';	//asigna a table una posicion relativa a la de las coordenadas del mouse
    	table.style.left = (x + 20) + 'px';

		for (var k = 1; k <= 3; k++) {
			table.insertAdjacentHTML('beforeend', '<tr id="r'+k+'"> </tr>');
			celdaTemp = document.getElementById('r'+k);
			for (var l = 2; l >= 0; l--) {
				num = (k*3)-l;
				celdaTemp.insertAdjacentHTML('beforeend', '<th> <button onClick="insertNum('+i+', '+j+', '+num+')">'+num+'</button> </th> ');
			}
		}
		table = document.getElementById('target');
		table.insertAdjacentHTML('beforeend', '<tr>	<th></th> <th> <button onClick="limpiarCelda('+i+', '+j+')" >clear</button></th>	</tr');
	}
	else {
		table.remove();
		table = null;
	}
}

function limpiarCelda(i, j) {
	celda = document.getElementById('r'+i+'c'+j);
	celda.value="";
}

function insertNum(i, j, k) {
	valorCelda = document.getElementById('r'+i+'c'+j);
	valorCelda.value = k;
	numeros(i, j);
}

for (var i = 0; i<9; i++){
	document.getElementById('tablero').insertAdjacentHTML('beforeend','<div class="Region" id='+i +'></div>');
	for (var j =0; j<9; j++){
		document.getElementById(i).insertAdjacentHTML('beforeend','<div class="Celda" id="'+ i + '-' + j + '" onClick="numeros(event, '+i+', '+j+')"><input id=r' +i+ 'c' +j+ ' type="numeric" maxlength ="1" min="1" max="9" readonly></div>');
	}
}