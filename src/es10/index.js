// Dinamic Import.

const button = document.getElementById("btn");

// pasamos 2 parametros, click y async function

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});



// 🔢 Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n; // posicion más grande

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);



// 🤝 Promise All Settled, promesa que se resuelve cuando todas las promesas se hayan cumplido o rechazado

const promise1 = new Promise((resolve,reject) => reject("reject 1"));
const promise2 = new Promise((resolve,reject) => resolve("resolve 2"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


// Promise.all: va hacer rechazada, cuando se rechaza alguna promesa
// Promise.allSettled: no importa el estado de las promesas, solo le importa el estado de las promesas. 


// 🌎 Global This

console.log(window);
console.log(globalThis);


console.log(self);
console.log(frames);
console.log(this);


// 🔍 Nuevo operador lógico: null operator
// trabajar elementos nulos
// cuando lado izquierdo es 'null'

/* const fooo = 'asd' ?? 'default string';
console.log(fooo); */

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)



// ⛓ Optional chaining

const user = {};
// console.log(user.profile.email) // no va permitir leer, porque no existe 
//leemos pero no rompaz la aplicacion, será un error que no nos va permitir trabajar
console.log(user?.profile?.email);  // al no existir se puede convertir a undefined

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}