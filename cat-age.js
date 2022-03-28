//calculando mi edad en edad de gato
//los primeros 2 anos de un humano cuentan como 25 anos de gato cada uno
//luego cada ano cuenta como 4 anos humanos

//Indico la edad
//la pido por pantalla

var myAge = parseInt(prompt('por favor escriba su edad: ', '0'));
var myName = prompt('por favor escriba su nombre: ', 'Juan');

//guardo el valor 2 
var earlyYears = 2;

//ahora multiplicamos * 25, de acuerdo a cada ano gatuno
 earlyYears *= 25;
 console.log('los primeros dos anos de edad de gato son: ' + earlyYears + ' anos gatunos')

 //ahora creamos una variable para la edad  menos los 2 anos
 var laterYears = myAge - 2

 //ahora multiplico ese resultado por 4

 laterYears *= 4;
console.log('mi edad menos 2 anos en anos gatunos son: ' + laterYears + ' anos gatunos');

//ahora mi edad en edad de gato, sumamos
var myAgeInCatYears = earlyYears + laterYears;

//ahora lo muestro en la consola
console.log('My name is: ' + myName + ' I am ' + myAge + ' years old in human years which is ' + myAgeInCatYears + ' years old in cat years.')