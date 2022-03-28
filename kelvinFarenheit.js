//calculo de temperaturas Cº, F e Kelvin

/**Pasar de Celsius a kelvin y a farenheit
0 C es igual a 273,15 K por lo tanto:**/

//variable para celsius
var celsiusTemp;

//variable para farenheit
var farenhheitTemp;

//valor fijo constante kelvin
var kelvinTemp = 273.15;


//necesitamos pedir el numero por pantalla desde el navegador
//pero el metodo prompt nos toma el valor como string, entonce tenemos que pasarlo a entero con los decimales si tiene
var converToCelsius = parseFloat(prompt('Ingrese la temperatura en grados Kelvin:', '0'));
console.log('la temperatura ingresado en grados Kelvin es: ' + converToCelsius)

celsiusTemp = converTocelsius - kelvinTemp;

//sin redondeo
console.log('la temperatura en Grados Celsius es: ' + gCelsius + ' con decimales');

//y este resultado a faranheit
farenhheitT = (celsiusTemp * 9/5) + 32;

console.log('la temperatura ingresada en grados farenheit es: ' + farenhheitTemp);

//con el metodo ceil redondeamos hacia arriba

console.log('la temperatura en Grados Farenheit es: ' + Math.ceil(farenhheitTemp) + ' con el metodo ceil');

//con el metodo round redondeamos hacia el entero mas cercano hacia arriba o hacia abajo, dependiendo de los decimales

console.log('la temperatura en Grados Farenheit es: ' + Math.round(farenhheitTemp) + ' con el metodo round');

//con el metodo floor redondeamos hacia abajo
console.log('la temperatura en Grados Farenheit es: ' + Math.floor(farenhheitTemp) + ' con el metodo floor');
