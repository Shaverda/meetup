
var firstPassword = document.querySelector("#first-pw");
var secondPassword = document.querySelector("#second-pw");

window.onload = function () {
	document.getElementById("acct-submit").onclick = function () {
		var errors = [];

		if (firstPassword.value !== secondPassword.value) {
			var match = "Your passwords need to match!";
			errors.push(match);
		}

		if (firstPassword.value.length < 6 || firstPassword.value.length > 12) {
			var characters = "Your password needs to be between 6 and 12 characters.";
			errors.push(characters);
		}

		patt = /[\!|\@|\#|\$|\&|\%|\^|\*]/;
		if (!patt.test(firstPassword.value)){
			var symbol = "Please include a symbol!";
			errors.push(symbol);
		}

		if (errors.length > 0) {
			alert(errors.join(" "));
		}
		console.log(errors);
	};
};