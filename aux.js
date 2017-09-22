var tableroSudoku = document.getElementById("tablero");

if (tableroSudoku == null) {
    document.getElementById('ppal').insertAdjacentHTML('beforeend','<form method="post" action="/init"><input type="submit" value="Jugar"/></form>');
}

$(function(){
    $.getJSON('/init', function(data) {
        console.log(data);
        document.getElementById('ppal').insertAdjacentHTML('beforeend','<container class="tablero" id="tablero"></container>');
        for (var i = 0; i<9; i++) {
            document.getElementById('tablero').insertAdjacentHTML('beforeend','<div class="Region" id='+i +'></div>');
            for (var j =0; j<9; j++) {
                document.getElementById(i).insertAdjacentHTML('beforeend','<div class="Celda" id="'+ i + '-' + j + '" onClick="numeros(event, '+i+', '+j+')"><input id=r' +i+ 'c' +j+ ' type="numeric" maxlength ="1" min="1" max="9" readonly></div>');
            }
        }
        document.getElementById('ppal').insertAdjacentHTML('beforeend','<input type="submit" value="Nuevo" title="nuevo"><input type="submit" value="Reiniciar" title="enviar"><input type="submit" value="Chequear" title="chequear"><input type="submit" value="Resolver" title="resolver">');
    });
});
