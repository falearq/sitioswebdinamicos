var saul = {
    nombre : 'Saúl',
    apellido : 'Morales',
    edad : 28,
    saludar : function(){
        console.log(`Hola soy` + ` `  + saul.nombre + ` `  + saul.apellido + ` `  + `y tengo` + ` `  + saul.edad)
    }

}
var gato = {
    nombre:'Mixiote',
    raza: 'de la calle',
    edad: 4,
    color: 'café',
}

function colorGato(gato){
    console.log( `El color de Mixi es:${gato.color}` )
    return {
        ...gato,
        color: 'azul',
    }

}
colorGato(gato)
saul.saludar()
    
