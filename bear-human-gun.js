//mini-app tipo piedra-papel o tijera

//pedimos al usuario una opcion:
function getUserChoice (userInput) {
    //nos aseguramos de que si el usuario escribe en Mayusculas su eleccion sea transformada a minusculas
    userInput = userInput.toLowerCase();

    //verificamos el valor ingresado sea valido
    if ( userInput === 'bear' || userInput === 'human' || userInput === 'gun' ) {
        return userInput;
    } else {
        return 'Please enter one of: bear, human or gun';
    }
}

//getUserChoice('zapato');

//ahora la computadora debe elegir uan opcion
function getComputerChoice () {
    //tenemos que generar un numero aleatorio entre 0 y 2 (0, 1, 2) para determinar la eleccion de la computadora
    var randomNumber = Math.floor( Math.random() * 3 );

    //ahora tenemos que asociar ese numero con alguna opcion
    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber === 1) {
        return 'human';
    } else {
        return  'gun';
    }
}
//getComputerChoice();

//ahora determinamos al ganador con la siguiente logica:
/**
 * beas mausl human
 * human disarm gun
 * gun shoot bear
 * or tie is draw
 */

function determineWinner (userChoice, computerChoice) {
//primero averiguamos si fue empate
    if (userChoice === computerChoice) {
        return 'tie!';
    }
    //si el usuario selecciona bear
    if ( userChoice === 'bear' ) {
        if ( computerChoice === 'human' ) {
            return "you wins!, u mauls a human";
        } else {
            return 'you lose, the computer shoot u';
        }
    }

    //si el usuario selecciona gun
    if ( userChoice === 'gun' ) {
        if ( computerChoice === 'bear' ) {
            return 'you wins!, u shoot a bear';
        } else {
            return 'you lose, the computer disarmed the gun';
        }
    }

    //si el usuario selecciona human
    if (userChoice === 'human' ) {
        if ( computerChoice === 'bear' ) {
            return 'you lose", a bear mauls u....';
        } else {
            return 'you wins!, u desarmed the computer gun';
        }
    }
}

//ahora iniciamos el juego, toma en cuenta que llamamos funciones dentro de esta funcion
function playGame () {

    //pedimos por el navegador la opcion del usuario
    var promptUserChoice = prompt('Please choose bear, gun or human: ');

    //guardamos este valor del usuario en la variable local, llamando su funcion
    var userChoice =  getUserChoice(promptUserChoice);

    //guardamos el valor de la computadora en la variable local llamando su funcion
    var computerChoice = getComputerChoice();

    //determinamos el ganador! llamando su funcion
    console.log(determineWinner(userChoice, computerChoice));
    
}

//iniciamos el juego!
playGame();