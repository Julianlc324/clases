'use strict'

//Arrays, arreglos, matrices
//var nombre = "julian"
//var datos =  ["julian", "londoño", "cardona"]
//var lenguajes = new Array("juli", "londono", "cardona")
//console.log(datos[0])
//console.log(datos.length)

//var elemento = Number(prompt("elemento de la array quieres?:" ))
//var tamaño = datos.length
/*if (elemento < tamaño) {
    console.log("elemento elegido: "+datos[elemento])
}else{
    console.log("indice incorrecto")
}*/

/*for (let i = 0; i < datos.length; i++) {
    console.log("mis elementos son: "+datos[i])
    
}*/

//datos.forEach((elemento, indice) => {
//    console.log("mis elementos son: "+elemento+" "+indice)
//});

//var categorias = ["accion", "terror", "comedia"]
//var peliculas = ["la verdad duele", "la vida es bella", "gran torino"]
//var cine = [categorias, peliculas]
//console.log(cine)
//console.log(cine[0][1])

var peliculas = new Array("la verdad duele", "la vida es bella", "gran torino")
peliculas.push("batman")

//var elemento = prompt("ingrese tu pelicula: ")
//peliculas.push(elemento)
peliculas.pop()
console.log(peliculas)

