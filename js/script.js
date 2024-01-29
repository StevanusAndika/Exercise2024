const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const resultElement = document.getElementById('convertedResult');
const convertButton = document.getElementById('convertButton');


convertButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    convertTemperature();
});


function convertTemperature() {
    const value = parseFloat(input1.value);
    const fromUnit = select1.value;
    const toUnit = select2.value;

    let result;
    let formula;

    if (fromUnit === '°Reamur' && toUnit === '°Celcius') {
        result = value * (5 / 4);
        formula = `${value} °Ré × 5/4 = ${result.toFixed(2)} °C`;
    } else if (fromUnit === '°Reamur' && toUnit === '°Fahrenheit') {
        result = (value * (9 / 4)) + 32;
        formula = `${value} °Ré × 9/4 + 32 = ${result.toFixed(2)} °F`;
    } else if (fromUnit === '°Reamur' && toUnit === '°Kelvin') {
        result = (value * (5 / 4)) + 273.15;
        formula = `${value} °Ré × 5/4 + 273.15 = ${result.toFixed(2)} K`;
    } else if (fromUnit === '°Celcius' && toUnit === '°Reamur') {
        result = value * (4 / 5);
        formula = `${value} °C × 4/5 = ${result.toFixed(2)} °Ré`;
    } else if (fromUnit === '°Celcius' && toUnit === '°Fahrenheit') {
        result = (value * (9 / 5)) + 32;
        formula = `${value} °C × 9/5 + 32 = ${result.toFixed(2)} °F`;
    } else if (fromUnit === '°Celcius' && toUnit === '°Kelvin') {
        result = value + 273.15;
        formula = `${value} °C + 273.15 = ${result.toFixed(2)} K`;
    } else if (fromUnit === '°Fahrenheit' && toUnit === '°Reamur') {
        result = (value - 32) * (4 / 9);
        formula = `(${value} °F - 32) × 4/9 = ${result.toFixed(2)} °Ré`;
    } else if (fromUnit === '°Fahrenheit' && toUnit === '°Celcius') {
        result = (value - 32) * (5 / 9);
        formula = `(${value} °F - 32) × 5/9 = ${result.toFixed(2)} °C`;
    } else if (fromUnit === '°Fahrenheit' && toUnit === '°Kelvin') {
        result = (value - 32) * (5 / 9) + 273.15;
        formula = `(${value} °F - 32) × 5/9 + 273.15 = ${result.toFixed(2)} K`;
    } else if (fromUnit === '°Kelvin' && toUnit === '°Reamur') {
        result = (value - 273.15) * (4 / 5);
        formula = `(${value} K - 273.15) × 4/5 = ${result.toFixed(2)} °Ré`;
    } else if (fromUnit === '°Kelvin' && toUnit === '°Celcius') {
        result = value - 273.15;
        formula = `${value} K - 273.15 = ${result.toFixed(2)} °C`;
    } else if (fromUnit === '°Kelvin' && toUnit === '°Fahrenheit') {
        result = (value - 273.15) * (9 / 5) + 32;
        formula = `(${value} K - 273.15) × 9/5 + 32 = ${result.toFixed(2)} °F`;
    } else {
        result = value;
        formula = `No conversion needed (${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit})`;
    }

    input2.value = result.toFixed(2);
    resultElement.innerHTML = `<p>Converted Result: ${result.toFixed(2)} ${toUnit}</p><p>Formula: ${formula}</p>`; 
}

// Text Gerak
var typing = new Typed ("#text-gerak", {
    strings: ["Temperature Convertor"],
    typeSpeed: 100,

/*untuk mengatur kecepatan efek mengetik.
semakin kecil angkanya semakin cepat teks yg diketik.*/
    backSpeed: 0,
    loop: false,
//kondisi dapat diulang

    backDelay:0,
// Waktu delay 100ms
    showCursor:false,
});