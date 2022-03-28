//mini-app que determina el actual y el ideal de calorias consumidas
//mostrara un mensaje de acuerdo a la cantidad cosumida

//determinar cuantas calorias consumimos cada dia

var day = 1;
var days = [];
var calories = [];

function inputCaloriesByDay () {  
    do {      
        days.push( prompt( 'Please tell me the day to register: ' ).toLowerCase());
        calories.push( parseInt( prompt( 'tell me how many calories you cosumed for this day?: ' )));

            switch ( days ) {
                case 'monday': 
                    return  calories ;
                break;
                case 'tuesday': 
                    return calories;
                break;
                case 'wednesday': 
                    return calories;
                break;
                case 'thursday': 
                    return calories;
                break;
                case 'friday': 
                    return calories;
                break;
                case 'saturday': 
                    return calories;
                break;
                case 'sunday':
                    return calories;
                default: 
                    return 'Ingrese un dia de la semana';
                break;
            }
            
    } while (day <= 7);
}
inputCaloriesByDay();
    
//ahora necesitamos realmente saber cuantas calorias consumimos a la semana, debemos sumar cada dia
function getTotalCalories () {
    inputCaloriesByDay();
    calories += calories;
    return calories;
}

//ahora necesitamos determinar la meta de calorias
function getIdealCalories () {
    var idealDailyCalories = 2200;
        return idealDailyCalories * 7;
}

//ahora necesitamos determinar si necesitamos comer mas o hacer mas ejercicio
function calculateHealthPlan () {
    var actualCalories = getTotalCalories();
    var idealCalories = getIdealCalories()

    //averiguamos si estamos o no
    if (actualCalories === idealCalories) {
        return 'Estas dentro de tu meta!';
    } else if (actualCalories < idealCalories) {
        return 'Necesitas comer un poco mas';
    } else {
        return 'hora de hacer ejercicio';
    }
}

calculateHealthPlan();