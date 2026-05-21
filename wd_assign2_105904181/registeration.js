/* write functions that define the action for each event */
function validate() {
	var sid = document.getElementById("sid").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var Fname = document.getElementById("Fname").value;
	var Lname = document.getElementById("Lname").value;
	var genm = document.getElementById("genm").checked;
    var genf = document.getElementById("genf").checked;
    var genO = document.getElementById("genO").checked;
    var Country = document.getElementById("Country").value;

	var errMsg = "";								/* stores the error message */
	var result = true;							/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;		/* regular expression for letters and spaces only */

	/* Rule 1, check if all required inputs have value */
if (sid == "") {
errMsg += "Username cannot be empty.\n";
}

if (email == "") {
errMsg += "Email cannot be empty.\n";
}

if (phone == "") {
errMsg += "phone number is required.\n";
}


if (pwd1 == "") {
errMsg += "Password cannot be empty.\n";
}
if (pwd2 == "") {
errMsg += "Retype password cannot be empty.\n";
}
if (Fname == "") {
errMsg += "First name cannot be empty.\n";
}

if (Lname == "") {
errMsg += "Last name cannot be empty.\n";
}

if ((genm == "")&&(genf == "")&&(genO == "")) {
errMsg += "A gender must be selected.\n";
}

if (Country == ""){
errMsg += "Please Write down your Country.\n";
}
	
	/* Rule 2, check if the user ID contains an @ symbol  */
if (sid.indexOf('@') == 0 ) {
errMsg += "Username cannot start with an @ symbol.\n";
}

if (sid.indexOf('@') < 0 ) {
errMsg += "Username must contain an @ symbol.\n";
}

if (!/^\d+$/.test(phone)) {  /* ^ is start, \d+ are digits and $ is finish  */
  errMsg += "Phone number must contain digits only.\n";
}

if (!/^\d{8,15}$/.test(phone)) {
  errMsg += "Phone number must be between 8 and 15 digits.\n";
}	


	/* Rule 3, check if password and retype password are the same */
	if (pwd1 != pwd2) {
		errMsg += "Passwords do not match.\n";
	}
	
	/* Rule 4, check if user name contains only letters and spaces */
	if (! Fname.match (pattern)) {
		errMsg += "User name contains symbols.\n";
	}

	/* Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

/* function showPwdWin will show the Password Rule window */
function showPwdWin () {
	var pwdHelpWin = document.getElementById("pwdHelpWin"); /*get element "pwdHelpWin" */
	var scrnOverlay = document.getElementById("scrnOverlay");	/*get element "scrnOverlay" */

	pwdHelpWin.style.display = "block";    			/*display element pwdHelpWin*/
	scrnOverlay.style.visibility = "visible";  		/*hide element scrnOverlay */
}

/* function hidePwdWin will hide the Password Rule window */
function hidePwdWin () {
	var pwdHelpWin = document.getElementById("pwdHelpWin"); 	/*get element "pwdHelpWin" */
	var scrnOverlay = document.getElementById("scrnOverlay");  /*get element "scrnOverlay" */

	pwdHelpWin.style.display= "none";  	/* hide element pwdHelpWin by setting the CSS property display as "none" */

	scrnOverlay.style.visibility = "hidden";  	/* display element scrnOverlay by setting the CSS property visibility as "hidden" */
}
/* link functions to appropriate events of corresponding HTML elements*/

/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
  var regForm = 	document.getElementById("regform");
  var pwdHelpBtn =  document.getElementById("pwdHelpBtn"); /* get element "pwdHelpBtn" */
  var pwdHelpClose = document.getElementById("pwdHelpClose");  /* get element "pwdHelpClose" */
		
	pwdHelpBtn.onclick = showPwdWin;	/* link function showPwdWin to the onclick event of button pwdHelpBtn */
	pwdHelpClose.onclick= hidePwdWin;   	/* links function hidePwdWin to the onclick event of button pwdHelpClose*/

	/* assigns functions to corresponding events */
  regForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;