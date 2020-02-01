//CONDICIONALES//
/*var genero = 'masculino'

if(genero == 'masculino'){
    console.log('El baño es de hombres');
}else{
    console.log('El baño es de mujeres');
}

//Si no es esto es lo otro OR ||//
var compara1 = 1 == '1';
//Si no es esto es lo otro OR ||//
var compara2 = 1 ==='1';
//Si no es esto es lo otro OR ||//
var compara3 = 6 < 5;
//Si no es esto es lo otro OR ||//
var compara4 = 6 <= 6;
//Si no es esto es lo otro OR ||//
var compara5 = 6===5 || 6===6
//&&//
var compara6 = 5>2  && 6===5*/

var edad = prompt('Pon aqui tu edad, no me mientas maldit@');

function mayoroMenor () {
    if(edad < 18 ){
        alert('Eres menor de edad, no puedes entrar');
    }else{
        alert('Eres mayorsito ya');
    }
}
mayoroMenor()

