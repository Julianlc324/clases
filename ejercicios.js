'use strict'
//Ejercicio 1
/*var numero1
var numero2
numero1 = Number(prompt("ingrese el numero 1: "))
numero2 = Number(prompt("ingrese el numero 2: "))

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = Number(prompt("ingrese bien el numero 1: "))
    numero2 = Number(prompt("ingrese bien el numero 2: "))
    
}

if(numero1 > numero2){
    console.log("numero1 es mayor: "+numero1)
}else if(numero2 > numero1){
    console.log("numero2 es mayor: "+numero2)
}else{
    console.log("ambos numero son iguales")
}*/

//Ejercicio 2
var contador = 0
var numero = 0
var suma = 0
var media = 0

do {
    numero = Number(prompt("ingrese un numero valido: "))
    if(isNaN(numero)){
        numero = 0
    }else if(numero >= 0){
        suma = suma + numero
        contador++
    }
    
} while(numero >= 0);
media = suma/contador
console.log("suma igual: "+suma)
console.log("promedio igual: "+media)