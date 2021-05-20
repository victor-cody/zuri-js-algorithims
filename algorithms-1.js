/**
* 1. Write a function named "convertFarToCelsius" that takes a single parameter and converts it to celsius.

Note:
- Round up your answers to 4 decimal places (hint: use the toFixed method)
- C = (F - 32) x 5/9; (e.g 0deg F = -17.7778 deg C)
- if the parameter passed is not a number or a string that can be converted to a valid number, return a string with the format below:
    `${parameter} is not a valid number but a/an ${parameter's type}.`
You can use the following cases as guides:

- convertFarToCelsius(0) should return `-17.7778`
- convertFarToCelsius("0") should return `-17.7778`
- convertFarToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
- convertFarToCelsius({temp: 0}) should return `{"temp": 0} is not a valid number but a/an object.`
 */

//function to conert to celsius

function convertFhaToCelsius(value) {
	// storing the typeof the argument
	const type = Array.isArray(value) ? 'array' : typeof value;
	let message = '';
	// checking if typeof value is not a number and is not a string that can be converted to a number
	if (typeof value !== 'number' && isNaN(Number(value))) {
		message = `${JSON.stringify(value)} is not a valid number but a/an ${type}.`
	}

	else {
		// converting value to a number if it is a string
		const celsius = (parseFloat(value) - 32) * 5 / 9;
		message = `${Number(celsius.toFixed(4))}`
	}
	console.log(message);
	return message;
}

convertFhaToCelsius(0)
convertFhaToCelsius("0")
convertFhaToCelsius([1, 2, 3])
convertFhaToCelsius({ temp: 0 })
convertFhaToCelsius({ a: 1, b: 2, c: 3 })
