//random-insult mini app

//creamos un array para partes del cuerpo
let randomBodyParts = [ 'Head', 'Nose', 'Legs', 'Feet' ];

//creamos un array para adjetivos
let randomAdjetives = ['Smelly', 'Boring', 'Lazy', 'Stupid'];;

//creamos un array de insultos.....
let randomWords = [ 'Fly', 'Marmot', 'Stick', 'Dog', 'Rat' ]

//creamos un array con las partes, adjetivos y palabras random
let randomBodyPart = randomBodyParts [ Math.floor( Math.random() * 4 ) ];

let randomAdjetive = randomAdjetives [ Math.floor( Math.random() * 4 ) ];

let randomWord =  randomWords [ Math.floor( Math.random() * 5 ) ];


//mostramos por consola el resultado
console.log('Your ' + randomBodyPart + ' is like a ' + randomAdjetive + ' ' + randomWord + '!!!!' );