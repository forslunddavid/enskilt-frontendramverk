const validCharLetter = "abcdefghijklmnopqrstuvwxyzåäö "
const validCharLetterNumber = "abcdefghijklmnopqrstuvwxyzåäö1234567890"
const validCharComma = "abcdefghijklmnopqrstuvwxyzåäö1234567890, ."
const validNumber = "1234567890."

function isValidUserName(validUserName) {
	for (let i = 0; i < validUserName.length; i++) {
		let characterName = validUserName.charAT(i).toLowerCase()
		if (!validCharLetter.includes(characterName)) {
			return [false, "Only letters and spaces are allowed"]
		}
	}
	if (validUserName.length < 2) {
		return [false, "Minimum 2 characters required"]
	}
	return [true, ""]
}

function isValidPassword(userPassword) {
	for (let x = 0; x < userPassword.length; x++) {
		let characterPassword = userPassword.charAt(x).toLowerCase()
		if (!validCharLetterNumber.includes(characterPassword)) {
			return [false, "Only letters and numbers are allowed"]
		}
	}
	if (userPassword.length < 5) {
		return [false, "minimum 5 characters required"]
	} else {
		return [true, ""]
	}
}

function isValidProductName(productName) {
	for (let i = 0; i < productName.length; i++) {
		let characterProductName = productName.charAt(i).toLowerCase()
		if (!validCharComma.includes(characterProductName)) {
			return [
				false,
				"Only letters,numbers, commas, periods and spaces are allowed",
			]
		}
	}
	if (productName.length == 0) {
		return [false, "Must enter a name"]
	}
	return [true, ""]
}

function isValidDescription(description) {
	for (let i = 0; i < description.length; i++) {
		let characterDescription = description.charAt(i).toLowerCase()
		if (!validCharComma.includes(characterDescription)) {
			return [
				false,
				"Only letters,numbers, commas, periods and spaces are allowed",
			]
		}
	}
	if (description.length < 10) {
		return [false, "Description must be at least 10 characters"]
	}
	return [true, ""]
}

function isValidPrice(price) {
	for (let x = 0; x < price.length; x++) {
		let character = price[x]
		if (!(character >= "0" && character <= "9") && character != ".") {
			return [false, "Price can only contain numbers and periods"]
		}
	}
	if (price.length < 3) {
		return [false, "Price must be at least 4 characters"]
	}
	return [true, ""]
}

function isValidImage(addImg) {
	const whiteSpaceCheck = /\s/
	if (whiteSpaceCheck.test(addImg)) {
		return [false, "No spaces are allowed"]
	}
	if (!addImg.startsWith("https://")) {
		return [false, "Must begin with https://"]
	}
	return [true, ""]
}
function isValidAddUser(addUser) {
	for (let i = 0; i < addUser.length; i++) {
		let characterUser = addUser.charAt(i).toLowerCase()
		if (!validCharLetter.includes(characterUser)) {
			return [false, "Only letters are allowed"]
		}
	}
	if (addUser.length < 3) {
		return [false, "Minimum 3 characters"]
	}
	return [true, ""]
}

function isValidAddPassword(addPassword) {
	for (let x = 0; x < addPassword.length; x++) {
		let characterAddPassword = addPassword.charAt(x).toLowerCase()
		if (!validCharLetterNumber.includes(characterAddPassword)) {
			return [false, "Only letters and numbers are allowed"]
		}
	}
	if (addPassword.length < 5) {
		return [false, "minimum 5 characters required"]
	} else {
		return [true, ""]
	}
}

export {
	isValidUserName,
	isValidPassword,
	isValidProductName,
	isValidDescription,
	isValidPrice,
	isValidImage,
	isValidAddUser,
	isValidAddPassword,
}
