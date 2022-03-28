//mini-app que precie el futuro de acuerdo a una series de frases....

//pido el nombre del usuario
let userName = prompt('What is ur name?:' );

if( userName ) {
    console.log('Hello ' + userName);
} else {
    console.log('Hello Visitante');
}

//pido alguna pregunta al usuario
var userQuestion = prompt('Please ask a question! about that ur future');
console.log(userName + ' your question is: ' + userQuestion);

//creo mi bola magica
//tenemos que usar un numero aleatorio para poder asociarlo a alguna frase de la bola magica
var eigthBall = Math.floor(Math.random() * 8);
console.log(eigthBall);

//configuro el random de respuestas!
switch (eigthBall) {
    case 0:
        console.log( 'It is certain.');
    break;
    case 1:
        console.log('It is decidedly so.');
    break;
    case 2:
        console.log('As I see it, yes.');
    break;
    case 3:
        console.log('Most likely.');
    break;
    case 4:
        console.log('Reply hazy, try again.');
    break;
    case 5:
        console.log('Ask again later.');
    break;
    case 6:
        console.log('Don\'t count on it.');
    break;

}



