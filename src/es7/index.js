// ES7: Nace Junio 2016
// includes: trabaja sobre un arreglo os tring,  
// nos va permitir saber si hay un elemento dentro de ese valor

// Includes
let numeros = [1, 2, 3, 7, 8];
console.log(numeros);
console.log(numeros.includes(7));

if (numeros.includes(7)) {
  console.log('Si se encuentra el valor 7');
} else {
  console.log('No se encuentra.')
}

// Exponencial
let base = 4;
let exponent = 2;
let result = base ** exponent;
let result_old = Math.pow(4, 2);

console.log(result);
console.log(result_old);
