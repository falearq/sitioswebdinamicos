//Esto es un comentario de una sola línea//


var miPrimerVariable;

miPrimerVariable = 'esto es el contenido de mi primer variable :)';

/*Este es un comentario multilínea
Gracias por leerlo. :) */

var miSegundaVariable = 'esto es el contenido de mi segunda variable :)';

var numeroUno, numeroDos, resultado, resultadoArreglado, resultadoEnNumero;

numeroUno = 10;
numeroDos = 20;
resultado = (numeroUno * numeroDos)/3;
resultadoArreglado = resultado.toFixed(2);
resultadoEnNumero = parseFloat(resultadoArreglado);

/*Trabajando con Strings = Cadenas de texto*/

var nombre, apellidoPaterno, apellidoMaterno, saludo, nombreMayus, nombreLower, letrasTotales, primeraLetra, str;
nombre = 'Saúl';
apellidoPaterno ='Morales';
apellidoMaterno = 'Vega';
//saludo = 'Hola mi nombre es' + ' ' + nombre + ' ' + apellidoPaterno + ' ' + apellidoMaterno;//
saludo = `Hola mi nombre es ${nombre} ${apellidoPaterno} ${apellidoMaterno}`;
nombreMayus = nombre.toUpperCase(); //Convierte a Mayúsculas//
nombreLower = nombre.toLowerCase(); //Convierte a minúsculas//
letrasTotales = nombre.length;  //# de caracteres//
primeraLetra = nombre.charAt(0); //1er caracter//
str = nombre.substr(0,2);//sustraer caracteres de un String//




