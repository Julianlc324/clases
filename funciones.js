'use strict'

//Funciones
/*function calculadora(){
    return "hola soy la calculadora"
}

console.log(calculadora())*/

/*function cacluladora(){
    console.log("hola soy la calculadora2")
}

cacluladora()*/

/*function calculadora(numero1, numero2){
    console.log("la suma es: "+(numero1 + numero2))
    console.log("la resta es: "+(numero1 - numero2))
    console.log("la multiplicacion es: "+(numero1 * numero2))
    console.log("la division es: "+(numero1 / numero2))
}
calculadora(2,2)*/


/*function informacion(nombre, apellido, edad = false){
    console.log(edad)

    console.log("mi nombre es: "+nombre)
    console.log("mi apellido es: "+apellido)
}

informacion("julian", "londoño", 32)*/

/*function calculadora(numero1, numero2){
    suma(numero1, numero2)
    resta(numero1, numero2)
    multiplicacion(numero1, numero2)
    division(numero1, numero2)
}

function suma(numero1, numero2){
    console.log("la suma es: "+(numero1+numero2))
}

function resta(numero1, numero2){
    console.log("la resta es: "+(numero1-numero2))
}

function multiplicacion(numero1, numero2){
    console.log("la multiplicacion es: "+(numero1*numero2))
}

function division(numero1, numero2){
    console.log("la division es: "+(numero1/numero2))
}

calculadora(2,4)*/

// Parametros rest
/*function listadoFrutas(fruta1, fruta2, ...frutas){
    console.log("fruta1: "+fruta1)
    console.log("fruta2: "+fruta2)
    console.log(frutas)
}*/

//listadoFrutas("naranja", "manazana", "sandia", "pera", "melon")

//Parametro spread
//var frutas = ["naranja", "manzana"]
///listadoFrutas(...frutas, "sandia", "pera", "melon" )

//Funciones anonimas
// Es una funcion q no tiene nombre

//var pelicula = function(nombre){
//    return "la pelicula es"+nombre
//}

/*function sumame(numero1, numero2, sumita, sumados){
    var suma = numero1 + numero2
    sumita(suma)
    sumados(suma)
}

sumame(2, 2, function(dato){
    console.log("la suma es: "+ dato)
},
function(dato){
    console.log("la suma por dos es: "+ (dato*2))
})*/

//Funcion flecha
/*function sumame(numero1, numero2, sumita, sumados){
    var suma = numero1 + numero2
    sumita(suma)
    sumados(suma)
}

sumame(2, 2, dato => {
    console.log("la suma es: "+ dato)
},
dato => {
    console.log("la suma por dos es: "+ (dato*2))
})*/

//Ambito
/*var texto = "hola mundo variable global"
var numero = 324
function holamundo(texto){
    var prueba = "pruebita"
    console.log(texto)
    console.log(typeof(numero).toString())
    console.log(prueba)
}

holamundo(texto)*/

//transformacion de textos
//var numero = 123
//var texto1 = "hola amigo"
//var texto2 = "CURSO"

//var dato = numero.toString()
//console.log(typeof(dato))

//var dato = texto1.toUpperCase()
//console.log(dato)

//var dato = texto2.toLowerCase()
//console.log(dato)

//longitud
//var nombre = "julian"
//var apellido = ["hola", "juli", "bonito"]
//console.log(apellido.length)

//Concatenar
//var nombre = "julian "
//var apellido = "londoño"

//var datos = nombre + apellido
//console.log(datos)

//busquedas
var palabra = " hola mundo bonito mundo "
//var busqueda = palabra.indexOf("mundo")
//var busqueda = palabra.lastIndexOf("mundo")
//var busqueda = palabra.search("mundo")
//var busqueda = palabra.match("mundo")
//var busqueda = palabra.substr(2, 10)
//var busqueda = palabra.charAt(2)
//var busqueda = palabra.startsWith("hola")
//var busqueda = palabra.endsWith("mundo")
//var busqueda = palabra.includes("mundo")

//funciones
//var busqueda = palabra.replace("mundo", "universo")
//var busqueda = palabra.slice(4, 6)
//var busqueda = palabra.split(" ")
//var busqueda = palabra.trim() 
//console.log(busqueda)

//Plantillas 
/*var nombre = prompt("ingrese el nombre: ")
var apellido = prompt("ingrese el apellido: ")
//var texto = "Mi nombre es "+nombre+" y mi apellido es: "+apellido
var texto = `<h1> Mi nombre es: ${nombre} </h1>
<h1> Mi apellido es: ${apellido} </h1> ` 
document.write(texto)*/








