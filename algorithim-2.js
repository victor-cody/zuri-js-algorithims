/** 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.
Note:
- for numbers that have multiple factors, use hyphens as separators
e.g 10 === "yu-oh", 30 === "yu-gi-oh"
- perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed.
Use the following cases as guides:

- checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
- checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
- checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"` */


const isMultipleOf2 = n => n % 2 === 0;

const isMultipleOf3 = n => n % 3 === 0;

const isMultipleOf5 = n => n % 5 === 0;

function checkYuGiOh(n) {
	// Edge Case: Line to check if the input is not a number
	let isNotANumber = typeof n !== 'number' && isNaN(Number(n));
	if (isNotANumber) {
		console.log(`invalid parameter: ${n}\n\n`);
		return `invalid parameter: ${n}\n\n`;
	}
	const array = [];
	let count = 1;
	while (count <= n) // generate numbers from 1 to n
	{
		let string = '';

		if (isMultipleOf2(count)) string += 'yu';

		if (isMultipleOf3(count)) string += string ? "-gi" : "gi";

		if (isMultipleOf5(count)) string += string ? "-oh" : "oh";

		string ? array.push(string) : array.push(count);
		count++;
	}
	console.log(array);
	return array;
}


checkYuGiOh(10)
checkYuGiOh("5")
checkYuGiOh("fizzbuzz is meh 55")
checkYuGiOh(30)
