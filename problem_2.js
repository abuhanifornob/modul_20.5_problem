// emperature Conversion: Fahrenheit to Celsius
// (32°F − 32) × 5/9 = 0°C

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}
const celsius = fahrenheitToCelsius(102).toFixed(3);
console.log(celsius);