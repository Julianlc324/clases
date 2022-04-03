'use strict'

var numero1 = Number(prompt("Ingrese el numero 1: "))
var numero2 = Number(prompt("Ingrese el numero 2: "))
var numero3 = Number(prompt("Ingrese el numero 3: "))
var numero4 = Number(prompt("Ingrese el numero 4: "))
var numero5 = Number(prompt("Ingrese el numero 5: "))
var numero6 = Number(prompt("Ingrese el numero 6: "))

var array1 = [numero1, numero2, numero3, numero4, numero5, numero6]
console.log(array1)
console.log("arreglo original:  "+array1)
array1.sort()
console.log("arreglo ordnado "+array1)
array1.reverse()
console.log("arreglo invertido "+array1)
var tamaño = array1.length
console.log("numero de elementos arreglo: "+tamaño)

function buscarNumero(numero){
    var indice = array1.indexOf(numero)
    if(indice != -1){
        console.log("valor encontrado su indice es: "+indice)
    }else{
        console.log("valor no encontrado")
    }
}

buscarNumero(Number(prompt("Ingrse el numero a buscar: ")))

