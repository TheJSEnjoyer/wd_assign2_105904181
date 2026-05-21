function validate() {

	var sid = document.getElementById("sid").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var Lname = document.getElementById("Lname").value;
    var customer = document.getElementById("Customer").value;
    var billingEmail = document.getElementById("billingEmail").value;
	var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    var card = document.getElementById("cardNumber").value;
    var voucher = document.getElementById("voucherCode").value;

	var errMsg = "";
	var pattern = /^[a-zA-Z ]+$/;


	if (sid == "") errMsg += "First name cannot be empty.\n";
	if (Lname == "") errMsg += "Last name cannot be empty.\n";
	if (email == "") errMsg += "Email cannot be empty.\n";
	if (phone == "") errMsg += "Phone number is required.\n";
    if (billingEmail === "") errMsg += "Billing email is required.\n";


if (!/^\d{10}$/.test(phone)) {
    errMsg += "Phone number must be exactly 10 digits.\n";
}


/* ===== required payment if credit card is chosen ===== */
if (!paymentMethod) {
    errMsg += "Please select a payment method.\n";
} 
else if (paymentMethod.value === "online") {

    if (card === "") {
        errMsg += "Credit card is required.\n";
    } 
    else if (!(card.length === 15 || card.length === 16) || !/^\d+$/.test(card)) {
        errMsg += "Credit card must be 15 or 16 digits (15 for Amex and 16 for Visa/MasterCard).\n";
    }

} 
/* ===== required payment if Voucher is chosen ===== */
else if (paymentMethod.value === "voucher") {

    if (voucher === "") {
        errMsg += "Voucher code is required.\n";
    }
    else if (voucher.length !== 12 || !/^\d+$/.test(voucher)) {
        errMsg += "Vouchers must be exactly 12 digits.\n";	
    }


} 

	if (!sid.match(pattern)) {
		errMsg += "First name contains invalid characters.\n";
	}

	/* ===== reservation date validation ===== */
	var datetimeEl = document.getElementById("datetime");

	if (!datetimeEl || datetimeEl.value === "") {
		errMsg += "Reservation date and time is required.\n";
	} else {

		var selectedDate = new Date(datetimeEl.value);
		var now = new Date();

		// remove seconds + ms for fairness
		selectedDate.setSeconds(0, 0);
		now.setSeconds(0, 0);

		if (selectedDate.getTime() <= now.getTime()) {
			errMsg += "Reservation date must be in the future.\n";
		}


		/* Business hours validation */
var hours = selectedDate.getHours();

if (hours < 9 || hours > 22) {
    errMsg += "Reservations are only available between 9:00 to 22:00.\n";
}
	}

	/* FINAL CHECK */
	if (errMsg != "") {
		alert(errMsg);
		return false;
	}

	return true;
}


/* ===== SAME EMAIL FEATURE ===== */
function setupSameEmail() {

	const sameEmail = document.getElementById("sameEmail");

	if (!sameEmail) return;

	sameEmail.addEventListener("change", function () {

		const email = document.getElementById("email");
		const billing = document.getElementById("billingEmail");

		if (!email || !billing) return;

		if (this.checked) {
			billing.value = email.value;
			billing.disabled = true;
		} else {
			billing.disabled = false;
			billing.value = "";
		}
	});
}


/* ===== AUTO-FILL RESTAURANT ===== */
function autoFillRestaurant() {

	const params = new URLSearchParams(window.location.search);
	const restaurant = params.get("restaurant");

	const dropdown = document.getElementById("restaurant");

	if (!dropdown || !restaurant) return;

	for (let i = 0; i < dropdown.options.length; i++) {
		if (dropdown.options[i].value === restaurant) {
			dropdown.selectedIndex = i;
			break;
		}
	}
}



/* ===== Customer Amounts ===== */
function autoFillCustomer() {

	const params = new URLSearchParams(window.location.search);
    const customer = params.get("customer");

	const dropdown = document.getElementById("Customer");

	if (!dropdown || !customer) return;

	for (let i = 0; i < dropdown.options.length; i++) {
		if (dropdown.options[i].value === customer) {
			dropdown.selectedIndex = i;
			break;
		}
	}
}






/* ===== INIT ===== */
function init() {

	var regForm = document.getElementById("regform");

	if (regForm) {
		regForm.onsubmit = validate;
	}
}


/* ===== SINGLE ONLOAD ===== */
window.onload = function () {

	init();                /* ===== initalizing the page ===== */
	autoFillRestaurant();  /* ===== auto filling restaurant after clicking reserve now in recommendation page ===== */
	setupSameEmail();      /* ===== Auto filling the billing email if the billing email is same as the email address ===== */
	setupPayment();        /* ===== setting up payment form ===== */
    setupDeposit();        /* ===== auto filling the deposit of the restaurants after choosing which ===== *///
	console.log("Loaded OK");
};




/* ===== Payment filling command ===== */

function setupPayment() {

const voucherRadio = document.getElementById("voucher");
const onlineRadio = document.getElementById("online");

const voucherField = document.getElementById("voucher-field");
const cardField = document.getElementById("card-field");

voucherRadio.addEventListener("change", function () {
    if (this.checked) {
        voucherField.style.display = "block";
        cardField.style.display = "none";
    }
});

onlineRadio.addEventListener("change", function () {
    if (this.checked) {
        cardField.style.display = "block";
        voucherField.style.display = "none";
    }
});
}


/* ===== Reservation deposits ===== */

function setupDeposit() {

  const deposits = {
    "Osaka's Sushi": 3,
    "L'Olivo": 5,
    "Saigon's Kitchen": 2,
    "Route 66 Diner": 1,
    "Mokhwa Dining": 3,
    "Al Noor Spice House": 2
  };

  const restaurant = document.getElementById("restaurant");
  const depositDisplay = document.getElementById("depositAmount");

  if (!restaurant || !depositDisplay) return;

  restaurant.addEventListener("change", function () {

    const selected = restaurant.value;

    if (deposits[selected] !== undefined) {
      depositDisplay.textContent = deposits[selected];
    } else {
      depositDisplay.textContent = "0";
    }
  });
}

