// LISTA DE EJERCICIOS //

// Números: //

// Ejercicio 1 //
function sumaNumeros(Num1, Num2) {
    return Num1 + Num2;
  }
console.log(sumaNumeros(5, 3)); 

// Ejercicio 2 //
function restaNumeros (Num1, Num2) {
  return Num1 - Num2;
}
console.log(restaNumeros(5, 3));

// Ejercicio 3 //
function productoNumeros (Num1, Num2) {
  return Num1 * Num2;
}
console.log(productoNumeros(5, 3));

// Ejercicio 4 //
function divisionNumeros (Num1, Num2) {
  return Num1 / Num2
}
console.log(divisionNumeros (5, 3));

// Ejercicio 5 //
function elevarPotencia (base, exponente) {
  return Math.pow (base, exponente);
}
console.log(elevarPotencia (5, 3));

// Letras: //

// Ejercicio 1 //
function concatenarCadenas(cadena1, cadena2){
  return cadena1 + cadena2;
}
console.log(concatenarCadenas ("Hola ", "mundo."));

// Ejercicio 2 //
function calcularLongitud(cadena){
  return cadena.length;
}
console.log(calcularLongitud("hola"));

// Ejercicio 3 //
function convertirMayusculas(cadena){
  return cadena.toUpperCase();
}
console.log(convertirMayusculas("mundo"));

// Ejercicio 4 //
function convertirMinusculas(cadena){
  return cadena.toLowerCase();
}
console.log(convertirMinusculas("MUNDO"));

// Ejercicio 5 //
function obtenerCaracter(cadena, indice){
  return cadena.charAt(indice);
}
console.log(obtenerCaracter("hola", 2));

// Arrays //

// Ejercicio 1 //
function suma (array){
  return array.reduce ((total, num)=> total + num, 0);
};

let array = [1, 2, 3, 4];

console.log (suma(array));

// Ejercicio 2 //
function promedio (array1){
  let suma = array1.reduce ((total, num)=> total + num, 0);
  return suma / array1.length;
}
let array1 = [1, 2, 3, 4];

console.log (promedio(array1))

// Ejercicio 3 //
let array2 = [4, 3, 2, 1];
array2.sort (function(a, b){
  return a - b
});

console.log (array2);

// Ejercicio 4 //
