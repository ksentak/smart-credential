// DOM elements
const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

const randomFunc = {
	lower: randomLower,
	upper: randomUpper,
	number: randomNumber,
	symbol: randomSymbol
};

// Copy clipboard
clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultElement.innerText;

	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

// Generate event listen
generateElement.addEventListener('click', () => {
	const length = +lengthElement.value;
	const hasLower = lowercaseElement.checked;
	const hasUpper = uppercaseElement.checked;
	const hasNumber = numbersElement.checked;
	const hasSymbol = symbolsElement.checked;

	resultElement.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length
	);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
	// Initialize password variable
	let generatedPassword = '';

	// Filter unchecked types
	const typesCount = lower + upper + number + symbol;
	const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
		i => Object.values(i)[0]
	);

	if (typesCount === 0) {
		return '';
	}

	// Loop over length call generator function for each type
	for (let i = 0; i < length; i += typesCount) {
		typesArray.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	// Add final password to password variable, shuffle, and return
	const randomPassword = generatedPassword.slice(0, length);
	console.log(randomPassword);

	let finalPassword = shuffleString(randomPassword);

	return finalPassword;
}

// Shuffle function
function shuffleString(str) {
	let array = str.split('');

	array.sort(function () {
		return 0.5 - Math.random();
	});
	str = array.join('');
	return str;
}

// Generator functions
function randomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
	const symbolString = '!@#$%^&*(){}[]=<>/,.';
	return symbolString[Math.floor(Math.random() * symbolString.length)];
}
