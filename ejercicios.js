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
/*var contador = 0
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
console.log("promedio igual: "+media)*/

//Ejercicio 3
/*var numero1
var numero2
numero1 = Number(prompt("ingrese el numero1: "))
numero2 = Number(prompt("ingrese el numero2: "))
if(isNaN(numero1) || isNaN(numero2)){
    console.log("error en la valores de los numeros")
}else{
    if(numero1 < numero2){
        for (let i = numero1; i <= numero2 ; i++) {
            console.log("intervalo de numero: "+i)
        }
    }else{
        for (let i = numero2; i <= numero1 ; i++) {
            console.log("intervalo de numero: "+i)
        }
    }
}*/

//Ejercicio 4
/*var numero1
var numero2
numero1 = Number(prompt("ingrese el numero1: "))
numero2 = Number(prompt("ingrese el numero2: "))
if(isNaN(numero1) || isNaN(numero2)){
    console.log("error en la valores de los numeros")
}else{
    if(numero1 < numero2){
        for (let i = numero1; i <= numero2; i++){
            let impar = i%2
            if(impar == 1){
                console.log("mi numero impar es: "+i)
            }else{
                console.log("mi numero par es: "+i)
            }
        }
    }else{
        for (let i = numero2; i <= numero1; i++){
            let impar = i%2
            if(impar == 1){
                console.log("mi numero impar es: "+i)
            }else{
                console.log("mi numero par es: "+i)
            }   
        }
    }
}*/

//Ejerciciio 5
/*var numero
numero = Number(prompt("ingrese un numero: "))
if(isNaN(numero)){
    console.log("numero invalido")
}else{
    var i = 0
    while(i<=numero){
        let par = i%2
        if(par == 0){
            console.log("numero par: "+i)
        }else{
            console.log("numero impar: "+i)
        }
        i++
    }
}*/

//Ejercicio 6
/*var numero 
var resultado
numero = Number(prompt("Ingrese un numero: "))
while(numero < 0 || isNaN(numero)){
    numero = Number(prompt("Ingrese un numero valido: "))
}
for (let i = 0; i <= numero; i++) {
    resultado = i%2
    if(resultado == 0){
        console.log("es un numero par: "+i)
    }else{
        console.log("es un numero impar: "+i)
    }
}*/

//Ejercicio 7
/*var numero
numero = Number(prompt("Ingrese un numero: "))
if(isNaN(numero)){
    console.log("numero invalido")
}else{
    for (let i = 0; i <= 10; i++) {
        let multiplicar = i*numero
        console.log("tabla de multiplicar del "+numero+" es: "+multiplicar)
    }
}*/

//Ejercicio 8
/*var numero1
var numero2
numero1 = Number(prompt("ingrese numero1: "))
numero2 = Number(prompt("Ingrese numero2: "))
while(isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0){
    numero1 = Number(prompt("ingrese un numero1 valido: "))
    numero2 = Number(prompt("Ingrese un numero2 valido: "))       
}
var suma = numero1 + numero2
var resta = numero1 - numero2
var multiplicacion = numero1 * numero2
var division = numero1 / numero2
console.log("resultado de la suma es: "+suma)
console.log("resultado de la resta es: "+resta)
console.log("resultado de la multiplicacion es: "+multiplicacion)
console.log("resultado de la division es: "+division)*/




