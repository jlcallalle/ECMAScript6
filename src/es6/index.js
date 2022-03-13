//Function (ES5)
function newFunction (name, age, country) {
    var name = name || 'Jorge';
    var age = age || '33';
    var country = country || 'PE';
    console.log(name, age, country);
}

 newFunction();


 //Function  (ES6)
 function newFunction2 (name = 'Jorge', age = '33', country = "PE") {
    console.log(name, age, country);
 }

 newFunction2();
 newFunction2('Liz', '28', 'COL');

 //Template Literal
 let hello = "Hello";
 let world = "World";
 let epicPhrase =  hello + ' ' + world;
 console.log(epicPhrase);
 let epicPhrase2 = `${hello} ${world}`;
 console.log(epicPhrase2);
