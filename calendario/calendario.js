window.addEventListener("DOMContentLoaded", function () {

document.getElementById('titulo').addEventListener('click',function(){
    //fecha actual
    let hoy = new Date();
    
    let diaUno = new Date();
    diaUno.setDate(1);
    
    let diaSem = diaUno.getDay();
    let mes = hoy.getMonth();
    let anio = hoy.getFullYear()

    let contenedor = document.createElement('div');
    contenedor.setAttribute('id','calendario');
    let tabla = document.createElement('table');
    contenedor.appendChild(tabla);//mete al contenedor la tabla
    tabla.setAttribute('border',1);
    let fila = tabla.insertRow(0);

    //introducir cabecera
    //  tabla.style.backgroundColor='gray';
    //  let td = tabla.createElement('td');
    //  tabla.appendChild (td);
    let cabecera = new Array ('D','L','M','X','J','V','S');
    for(let i in cabecera){
        let cabeceraTabla = document.createElement('th');
        let texto = document.createTextNode(cabecera[i]);
        cabeceraTabla.appendChild(texto);
        fila.appendChild(cabeceraTabla);
    }
    document.body.appendChild(contenedor);
    


    function diasEnUnMes(mes, año) {
        return new Date(año, mes, 0).getDate();
    }
    
    
    function insertarSemana();

});



});