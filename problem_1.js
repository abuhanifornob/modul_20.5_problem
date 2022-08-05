// emperature Conversion: Celsius to Fahrenheit
// Formula is: (0°C × 9/5) + 32 = 32°F

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
}

const fahrenheit = celsiusToFahrenheit(0);
console.log(fahrenheit);