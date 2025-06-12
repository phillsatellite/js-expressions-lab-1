const day1tempF = 32;
const day2tempC = 25;
const day3tempF = 70;
const day4tempC = 18;
const day5tempF = 80;
const day6tempC = 15;
const day7tempF = 72;
const day8tempC = 28;
const day9tempF = 68;
const day10tempC = 20;
const day11tempF = 75;
const day12tempC = 23;
const day13tempF = 82;
const day14tempC = 30;
const day15tempF = 65;
const day16tempC = 22;
const day17tempF = 77;
const day18tempC = 26;
const day19tempF = 78;
const day20tempC = 24;
const day21tempF = 73;
const day22tempC = 21;
const day23tempF = 79;
const day24tempC = 27;
const day25tempF = 71;
const day26tempC = 19;
const day27tempF = 74;
const day28tempC = 17;
const day29tempF = 76;
const day30tempC = 29;

//Array of temps in Celsius
const celsiusTempArray = 
[25, 18, 15, 28, 20, 23, 30, 
22, 26, 24, 21, 27, 19, 17, 29];

//Array of temps in Fahrenheit
const fahrenheitTempArray = 
[32, 70, 80, 72, 68, 75, 82, 
65, 77, 78, 73, 79, 71, 74, 76];

//Converts Celsius to Fahrenheit 
function celsiusToFahrenheit(celsiusTempArray){
    return celsiusTempArray.map(c => (c * 9/5) + 32);
}

//Shows results of Celcius to Fahrenheit 
let tempF = celsiusToFahrenheit(celsiusTempArray)
console.log(tempF);

//Converts Fahrenheit to Celcius 
function fahrenheitToCelsius(fahrenheitTempArray){
    return fahrenheitTempArray.map(f => (f - 32) * 5/9);
}

//Shows results of Fahrenheit to Celsius
let tempC = fahrenheitToCelsius(fahrenheitTempArray)
console.log(tempC);

//Array of all the temps in Fahrenheit 
const allFahrenheitTempsArray = 
[32, 70, 80, 72, 68, 75, 82, 
65, 77, 78, 73, 79, 71, 74, 76,
77, 64.4, 59, 82.4, 68, 73.4, 86, 71.6,
78.8, 75.2, 69.8, 80.6, 66.2, 62.6, 84.2];

//Array of all the temps in Celsius
const allCelsiusTempsArray = 
[25, 18, 15, 28, 20, 23, 30, 
22, 26, 24, 21, 27, 19, 17, 29, 
0.0, 21.1, 26.7, 22.2, 20, 23.9, 27.8, 
18.3, 25, 25.6, 22.8, 26.1, 21.7, 23.3, 24.4];

//Totals up all Celsius temps 
const tot_temperature_in_celsius = allCelsiusTempsArray.reduce((sum, temp) => sum + temp, 0);

//Shows result for all Celsius temps 
console.log("Total temp in Celsius is:", tot_temperature_in_celsius);

//Totals up the sum for all Fahrenheit temps 
const tot_temperature_in_fahrenheit = allFahrenheitTempsArray.reduce((sum, temp) => sum + temp, 0);

//Shows result for sum of Fahrenheit temp should be 2171.2
console.log("Total temp is Fahrenheit is:", tot_temperature_in_fahrenheit);

//Finds average for all temps in Fahrenheit
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / allFahrenheitTempsArray.length;

//Shows results for average in Fahrenheit
console.log(avg_temperature_in_fahrenheit);

//Finds average for all Celsius Temps 
const avg_temperature_in_celsius = tot_temperature_in_celsius / allCelsiusTempsArray.length;

//Shows average for Celsius
console.log(avg_temperature_in_celsius);

module.exports = {
    tot_temperature_in_celsius,
    tot_temperature_in_fahrenheit,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};