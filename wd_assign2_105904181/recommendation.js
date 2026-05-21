function recommendRestaurant() {

    // ===== Detects the option from these 3 categories =====
    let diet = document.querySelector('input[name="diet"]:checked');
    let budget = document.querySelector('input[name="Budget"]:checked');
    let reason = document.querySelector('input[name="reason"]:checked');

    let resultDiv = document.getElementById("recommendation");

    // DEBUG
    console.log(diet, budget, reason);

    // ===== Checks if some options are missing =====
    if (!diet || !budget || !reason) {
        resultDiv.innerHTML = "Please choose for all options.";
        return;
    }

    // ===== Checks the answered value from the selections =====
    diet = diet.value;
    budget = budget.value;
    reason = reason.value;

    let result = "";

    // ===== Recommendation Logic =====

    if (diet === "Halal") {

        result = `
        <h2>We Recommend you: Al Noor Spice House</h2>

        <img src="images/MEast.jpg" alt="Al Noor Spice House" width="150">

        <p>Perfect halal-friendly Middle Eastern restaurant.</p>

        <a href="reservation.html?restaurant=Al Noor Spice House">
        Reserve Now
        </a>
        `;
    }

        // ===== encodeURIComponent command makes it choose the restaurant by default when clicking reserve now automatically =====
    else if (diet === "Pescatarian") {

        result = `
        <h2>We Recommend you: Osaka's Sushi</h2>

        <img src="images/JPN.jpg" alt="Osaka's Sushi" width="150">

        <p>Fresh Japanese sushi and seafood experience.</p>

        
        <a href="reservation.html?restaurant=${encodeURIComponent("Osaka's Sushi")}">
        Reserve Now
        </a>
        `;
    }

    else if (diet === "Vegan") {

        result = `
        <h2>We Recommend you: Saigon's Kitchen</h2>

        <img src="images/VTN.jpg" alt="Saigon's Kitchen" width="150">

        <p>Fresh and affordable Vietnamese vegan-friendly food.</p>

       <a href="reservation.html?restaurant=${encodeURIComponent("Saigon's Kitchen")}">
        Reserve Now
        </a>
        `;
    }

    else if (reason === "Couple") {

        result = `
        <h2>We Recommend you: L'Olivo</h2>

        <img src="images/ITN.jpg" alt="L'Olivo Italian Restaurant" width="150">

        <p>Romantic Italian dining perfect for couples.</p>

       <a href="reservation.html?restaurant=${encodeURIComponent("L'Olivo")}">
        Reserve Now
        </a>
        `;
    }

    else if (reason === "Business") {

        result = `
        <h2>We Recommend you: L'Olivo</h2>

        <img src="images/ITN.jpg" alt="L'Olivo Business Dining" width="150">

        <p>Professional dining environment suitable for meetings.</p>

       <a href="reservation.html?restaurant=${encodeURIComponent("L'Olivo")}">
        Reserve Now
        </a>
        `;
    }

    else if (reason === "Family") {

        result = `
        <h2>We Recommend you: Route 66 Diner</h2>

        <img src="images/USA.jpg" alt="Route 66 Diner" width="150">

        <p>Family-friendly classic American diner experience.</p>

       <a href="reservation.html?restaurant=${encodeURIComponent("Route 66 Diner")}">
        Reserve Now
        </a>
        `;
    }

    else if (reason === "Friends") {

        result = `
        <h2>We Recommend you: Mokhwa Dining</h2>

        <img src="images/KRN.jpg" alt="Mokhwa Korean BBQ" width="150">

        <p>Korean BBQ and modern dining experience perfect for friends.</p>

       <a href="reservation.html?restaurant=${encodeURIComponent("Mokhwa Dining")}">
        Reserve Now
        </a>
        `;
    }

    // ===== Budget ONLY used as fallback (no conflicts) =====

    else if (budget === "Budget") {

        result = `
        <h2>We Recommend you: Saigon's Kitchen</h2>

        <img src="images/VTN.jpg" alt="Saigon's Kitchen" width="150">

        <p>Affordable and fresh Vietnamese food.</p>

       <a href="reservation.html?restaurant=${encodeURIComponent("Saigon's Kitchen")}">
        Reserve Now
        </a>
        `;
    }

    else if (budget === "Mid-range") {

        result = `
        <h2>We Recommend you: Route 66 Diner</h2>

        <img src="images/USA.jpg" alt="Route 66 Diner" width="150">

        <p>Balanced price and comfort dining experience.</p>

       <a href="reservation.html?restaurant=${encodeURIComponent("Route 66 Diner")}">
        Reserve Now
        </a>
        `;
    }

    else if (budget === "Premium") {

        result = `
        <h2>We Recommend you: L'Olivo</h2>

        <img src="images/ITN.jpg" alt="L'Olivo Premium Dining" width="150">

        <p>High-end Italian dining experience.</p>

       <a href="reservation.html?restaurant=${encodeURIComponent("L'Olivo")}">
        Reserve Now
        </a>
        `;
    }

    else {

        result = `
        <h2>We Recommend you: Route 66 Diner</h2>

        <img src="images/USA.jpg" alt="Route 66 Diner" width="150">

        <p>Classic American diner experience.</p>

       <a href="reservation.html?restaurant=${encodeURIComponent("Route 66 Diner")}">
        Reserve Now
        </a>
        `;
    }

    resultDiv.innerHTML = result;
}