function verifyPassword() {
	var password = document.getElementById("password").value;
    var regex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/; // Regex to ensure at least one digit and minimum 6 characters
    if (regex.test(password)) {
        alert("Password is valid!");
    } else {
		alert("Password must contain at least one number and be at least 6 characters long.");
		}
    }
	
function confirmPassword() {
	var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (confirmPassword != password) {
        alert("Password does not match.");
		}
	}
	
function validateIDnr() {
    var input = document.getElementById("IDnr");
    var regex = /^(0[1-9]|[1-9][0-9])((0[1-9])|(1[0-2]))((0[1-9])|([12][0-9])|(3[01])) ?- ?\d{4}$/;
    if (!regex.test(input.value)) {
        alert("Please enter the ID number in the format YYMMDD - xxxx, where YYYY is the last two digits of the year, MM is the month, DD is the day, and xxxx is a four-digit number.");
        input.value = ''; // Clear the input field
    }
}
