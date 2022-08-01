// Operador de Reposo, extrae propiedades de un objeto del cual no se ha construido

const obj = {
    name: 'jorge',
    age: '33',
    country: 'Peru',
}

// name propiedad que se va extraer
// let { name, ...all } = obj;
// console.log(name, all);

// imprimir todos menos country
let { country, ...all } = obj;
console.log(all);



// Utilidades de propagación, unir objetos a un nuevo objeto
const obj1 = {
    name: 'jorge',
    age: '33',
}

const obj2 = {
    ...obj1,
    country: 'Peru'
}

console.log(obj1);
console.log(obj2);

// Promise.finally, saber cuando ha terminado el llamado y ejecutar alguna lógica
// creamos promesa

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            // ? resolve('Hello wordl')
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log('then',response))
    .catch(error => console.log('catch', error))
    .finally(() => console.log('Finalizo'))


// REGEX


 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
 const match = regexData.exec('2022-05-31');
 const year = match[1];
 const month = match[2];
 const day = match[3];
 console.log('Date -> ', year, month, day);