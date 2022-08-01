// ES11

// 🧯 Replace

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python"); // cambia el primer valor encontrado y reemplazar x otro
console.log(replacedString);


//// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);


// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

const message = new Message();
message.show('Hola!');


//  👽 Promise Any
// objeto global de promise, cuyo argunto va ser array de promesa, capturando la primera que fue resulta de forma satisfactoria

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


// WeakRef: permite tener referencia debil a objeto sin evitar que este objeto sea pasado o recogido por el otro objeto
class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    { ... }
}

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);



// Comite de JS, https://tc39.es/