// es8 

//Object entries deveule los valores de una matriz.
const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}

//Tranformar este objeto en una matriz. 
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 
const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}
// muestra los valores en arreglo de string
const values = Object.values(data);
console.log(values)
console.log(values.length)

// Padding:
// nos permite añadir cadenas vacías o elementos a string, pudiendo modificar la cadena string como tal.
// Podría servir del lado del front , para mostrar una estructura de elementos.

const string = 'hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'
console.log(string.padEnd(12, ' -----')) 
console.log('food'.padEnd(12, '  -----'))

const obj = {
  name: 'oscar',
}

const helloWorld = () => {
  return new Promise((resolve, reject) => { //resuelve, reject (no llega a suceder)
    (true) //false
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

// Async away te la forma correcta: 
// Try cash va permitir trabajar mejor, forma para manejar los errores correctamente.
// try condición, cash error
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();