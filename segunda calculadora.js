var x = prompt("escriba aqui la operacion matematica que desea");
function suma (){
    let n1 = 10
    let n2 = 5
    let suma = n1+n2
    console.log(suma);
}

function resta (){
    let n1 = 10
    let n2 = 5
    let resta = n1-n2
    console.log(resta);
}

function multiplicacion (){
    let n1 = 10
    let n2 = 5
    let multiplicacion = n1*n2
    console.log(multiplicacion);
}

function division (){
    let n1 = 10
    let n2 = 5
    let division = n1/n2
    console.log(division)
}
switch (x){
    case "+":
    suma();
    break;
    
    case "-":
    resta();
    break;
    
    case "*":
    multiplicacion();
    break;
    
    case "/":
    division();
    break;

    default:
    alert("no disponible");
    break;
}
