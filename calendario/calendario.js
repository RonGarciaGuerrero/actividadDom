window.addEventListener("DOMContentLoaded", function () {

document.getElementById('titulo').addEventListener('click',function(){
    //fecha actual
    let hoy = new Date();
    
    let diaUno = new Date();
    
    diaUno.setDate(1);//devuelve los milisegundos desde 1970 hasta la fecha especificada
    
    
    let mes = hoy.getMonth();
    let anio = hoy.getFullYear()

    let contenedor = document.createElement('div');
    contenedor.setAttribute('id','calendario');
    
    let tabla = document.createElement('table');
    contenedor.appendChild(tabla);//mete al contenedor la tabla
    tabla.setAttribute('border',1);
    let semana = 0;//empieza en cero y termina en 5
    let fila = tabla.insertRow(semana);

    let ultimoDia = new Date(anio, mes+1, 0).getDate();//le paso como parametros el año, el mes siguiente, y como tercer parametro el dia cero de ese mes que no existe y por defecto me devuelve el ultimo dia del mes anterior
    

    //introducir cabecera
    let cabecera = new Array ('D','L','M','X','J','V','S');
    for(let i in cabecera){
        let cabeceraTabla = document.createElement('th');
        let texto = document.createTextNode(cabecera[i]);
        cabeceraTabla.appendChild(texto);
        fila.appendChild(cabeceraTabla);
    }
    document.body.appendChild(contenedor);
    
    let diaSem = diaUno.getDay();//return an integer number, between 0 and 6
    semana++;
    fila=tabla.insertRow(semana);
    //primeros 7 días de la semana, imprimo los dias en blanco si los hubiera antes del dia 1 
    for(let i=0;i<diaSem;i++){
        let dia = document.createElement('td');
        fila.appendChild(dia);
    }
    //imprimo los dias que correspondan a la primera semana
    let contadorDias=1;
    for(let i=diaSem;i<7;i++){
        let dia = document.createElement('td');
        let numTexto = document.createTextNode(contadorDias);
        dia.appendChild(numTexto);
        fila.appendChild(dia);
        ultimoDia--;
        contadorDias++;
    }
    
    //insertando los restantes días del mes
    semana++;
    fila=tabla.insertRow(semana);
    let j;//saco la variable de la semana para poder usarla fuera del bloque
    for(let i=1;i<=5;i++){//itero entre todas las semanas que puede tener un mes
        
        for(j=0;j<7;j++){//itero por cada semana
            let dia = document.createElement('td');
            let numTexto = document.createTextNode(contadorDias);
            dia.appendChild(numTexto);
            fila.appendChild(dia);
            ultimoDia--;
            contadorDias++;
            if(ultimoDia==0){
                break;
            }
        }
        semana++;
        if(j==7&&ultimoDia!=0){
            fila=tabla.insertRow(semana);
        }     
    }
    //imprimo las casillas en blanco despues del ultimo día del mes 
    while(j<6){
        let dia = document.createElement('td');
        fila.appendChild(dia);
        j++;    
    }

});



});