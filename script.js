const cardholderName = document.querySelector('.block__cardholder--name');
const creditcardName = document.querySelector(
	'.block__header__creditcard--name'
);
const creditcardNameAlert = document.querySelector('.block__cardholder--alert');

const cardNumber = document.querySelector('.block__cardholder--number');
const cardNumberAlert = document.querySelector(
	'.block__cardholder--numberalert'
);
const cardNumberImageText = document.querySelector(
	'.block__header__creditcard--number'
);

const month = document.querySelector(".block__cardholder__date--month");
const cardMonth = document.querySelector(".block__header__creditcard--datemth");
const day = document.querySelector(".block__header__creditcard--dateday");
const dateAlert = document.querySelector(".block__cardholder--datealert");


const year = document.querySelector(".block__cardholder__date--year");
const cardYear = document.querySelector(".block__header__creditcard--dateday");
const dateAlert2 = document.querySelector(".block__cardholder--datealert2");

const cvc = document.querySelector(".block__cardholder__date--cvc");
const cvcAlert = document.querySelector(".block__cardholder--cvcalert");

const submit = document.querySelector(".block__cardholder--submit");
const blockcardholder = document.querySelector(".block__cardholder");
const thanks = document.querySelector(".block__thanks");



// cardholder name section

cardholderName.addEventListener('input', () => {
	const input = cardholderName.value;
	const trimmedInput = input.trim();
	const normalizedInput = trimmedInput.replace(/\s+/g, ' ');

	const [firstName, lastName] = normalizedInput.split(' ');
	const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

	const formattedFirstName = formatName(firstName);
	const formattedLastName = formatName(lastName);

	if (
		/^[a-zA-Z ]{2,10}$/.test(formattedFirstName) &&
		/^[a-zA-Z ]{2,10}$/.test(formattedLastName)
	) {
		cardholderName.style.border = '2px solid lightgrey';
		creditcardNameAlert.textContent = '';
		creditcardName.textContent = `${formattedFirstName} ${formattedLastName}`;
	} else if (/^[a-zA-Z ]{2,10}$/.test(normalizedInput)) {
		cardholderName.style.border = '2px solid red';
		creditcardName.textContent = '';
		creditcardNameAlert.textContent = 'Missing first name or last name.';
	} else {
		cardholderName.style.border = '2px solid red';
		creditcardName.textContent = '';
		creditcardNameAlert.textContent = 'Invalid first name and/or last name.';
	}
});

// credit card number section

function validateCreditCard() {
	const input = cardNumber.value;
	const sanitizedCardNumber = input.replace(/[\s-]/g, '');

	
	const regex = /^\d{16}$/;

	if (regex.test(sanitizedCardNumber)) {

		function divideAndFormatNumber(number) {
			const strNumber = number.toString();
			const chunks = [];

			for (let i = 0; i < strNumber.length; i += 4) {
				chunks.push(strNumber.slice(i, i + 4));
			}

			return chunks.join(' ');
		}

		cardNumberAlert.textContent = '';
		cardNumber.style.border = '2px solid lightgrey';
		cardNumberImageText.textContent = divideAndFormatNumber(sanitizedCardNumber);
	} else {
		cardNumber.style.border = '2px solid red';
		cardNumberAlert.textContent = 'Invalid credit card number';
	}
}

cardNumber.addEventListener('input', validateCreditCard);

// date section

function validateMonth() {

   const input = month.value;

  

    const regex = /^(0?[1-9]|1[0-2])$/;
    
    if (regex.test(input)) {
        cardMonth.textContent = `${input.padStart(2, '0')}`
        month.style.border = '2px solid lightgrey';
        dateAlert.textContent = ""
        
    } else {
        month.style.border = '2px solid red';
        dateAlert.textContent = "Invalid month"
    }
}

month.addEventListener("input", validateMonth);

// year section

function validateYear() {
    const input = year.value;
    const currentYear = new Date().getFullYear();
    const regex = /^(19\d{2}|20\d{2})$/;
    
    if (regex.test(input) && parseInt(input) <= currentYear) {
        year.style.border = '2px solid lightgrey';
        
       
        const lastTwoDigits = input.slice(-2);
        cardYear.textContent = `/ ${lastTwoDigits}`;
        
        dateAlert2.textContent = '';
    } else {
        year.style.border = '2px solid red';
        dateAlert2.textContent = 'Invalid year';
    }
}

year.addEventListener("input", validateYear);

// cvc section

function validateCVC() {
    const input = cvc.value;
    const regex = /^[0-9]{3,4}$/;
    
    if (regex.test(input)) {
        cvc.style.border = '2px solid lightgrey';
        cvcAlert.textContent = '';
    } else {
        cvc.style.border = '2px solid red';
        cvcAlert.textContent = 'Invalid CVC';
    }
}

cvc.addEventListener("input", validateCVC);


function showthanks() {
    blockcardholder.style.display = "none";
    thanks.style.display = "flex";
}

submit.addEventListener("click", showthanks);



// _____________________________________________________

