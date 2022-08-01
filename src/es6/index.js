// Function (ES5)
function newFunction (name, age, country) {
    var name = name || 'Jorge';
    var age = age || '33';
    var country = country || 'PE';
    console.log(name, age, country);
}

 newFunction();


 //Function  (ES6) | Establecer parametros 
 function newFunction2 (name = 'Jorge', age = '33', country = "PE") {
    console.log(name, age, country);
 }

 newFunction2();
 newFunction2('Liz', '28', 'COL');


 //Template Literal |  concatenar
 let hello = "Hello";
 let world = "World";
 let epicPhrase =  hello + ' ' + world;
 console.log(epicPhrase);

 let epicPhrase2 = `${hello} ${world}`;
 console.log(epicPhrase2);


 // Template Literal | Multilinea 
 
 // (ES5)
 let lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem \n" 
 + "accusantium doloremque."

 // (ES6)
 let lorem2 = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
 accusantium doloremque.`
 console.log(lorem);
 console.log(lorem2);

 // Desestructuración

 // ES5
 let person = {
     'name': 'Jorge',
     'age': '33',
     'country': 'PE',
 }
 console.log(person.name, person.age);
 
 // ES6
 let { name } = person;
 console.log(name);
 


 // Operador de propagación spread, permite expandir/unir varios elementos

 let team1 = ['Jorge', 'Liz', 'Gael'];
 let team2 = ['Jose', 'Dora', 'Joaquin'];
 let education = ['David', ...team1, ...team2]; 
 
 //crea nuevo arreglo de David con los 2 unidos
 console.log(education);


 // VAR, LET, COST

 var hola = 'hola'; // disponible en forma global
 // let: solo esta disponible en el scope (bloque de código definido) 

 {
     var globalVar = 'Global Var';
 }

 {
     let globalLet = 'Global Let';
     console.log(globalLet);
 }

 console.log(globalVar);
 
// const no cambia de valor
 const a = 'b';
 console.log(a);
 a = 'a';
 console.log(a);


// 4.- OBJETOS
let nombre = 'oscar';
let edad = '33';

// es5: anteoriomente se creaba un objeto de esta forma:
obj = { nombre: nombre, edad: edad };

// es6: en vez de hacer toda la asignación completa, 
// ahora toma la llave y valor de los elementos
obj2 = {  nombre, edad }

console.log(obj);
console.log(obj2);


// 5.- Arrow Functions (sintaxis reducible, this no utlizable)

const nombres = [
    {name:'Jorge', age: '33'},
    {name:'Liz', age: '28'}
]


// forma1:  iterar cada elemento y mostrar en consola, utilizo metodo map, se pasa funcion anonima
let listaDeNombre = nombres.map(function(item) {
    console.log(item.name);
});
console.log(listaDeNombre);

// forma2: remplzar funcion anonima por el elemento 
let listaDeNombre2 = nombres.map(item => console.log(item.name));
console.log(listaDeNombre);

// forma3: otras formas de arrows funcions 
const listaDeNombres3 = (name, age, country) => {
    ...
}

// forma4: cuando solo paso 1 parametro
const listaDeNombres4 = name => {
    ...
}

// forma 5: asgignar directamente.
const square = num => num * num;




// async / await, se usan en promesas
//async function ().... 
// va pasar codigo


// Promesas 
const helloPrimise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey');
        } else {
            reject('ups');
        }
    } )
}

helloPrimise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log('error'))
    
// metodos then o catch



// Clases, Módulos y Generadores
// Clases: una forma de sintaxis más clara para manejar objetos y herencia (POO)

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator;
console.log(calc.sum(3,5));



// Modules (Import | Export )

import { sumar } from './modules/module-suma.js';
const resultado = sumar(5, 2);
console.log('resultado module: ' + resultado);

import { hello } from './modules/module-utils.js';
const resultado2 = hello();
console.log('texto module js: ' + resultado2);

// Generator
function* helloWorld() {
    if (true) {
      yield 'Hello, ';
    }
    if (true) {
      yield 'World';
    }
  };

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

