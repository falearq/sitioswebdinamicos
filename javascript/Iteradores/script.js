//CONDICIONALES//
var ganados = 0;
var perdidos = 0;

function volado(){
    var random = Math.random() * 100;
    if(random >=50){
        return 1
    }else{
        return 0
    }
}

var i = 0;
while( i <= 365){
    var volados = volado();
    if(volados === 1){ganados += 1}else{
        perdidos +=1
    }
    i++
}

/*for(var i = 1; 1<=365; i++){
    var volados = volado();
    if(volados === 1){
        ganados += 1;
    }
}*/

console.log(ganados)
