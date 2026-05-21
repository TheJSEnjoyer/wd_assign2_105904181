/* ===== CUSTOMER MAPPING ===== */
const customerMap = {
    "1Cus": 1,
    "2Cus": 2,
    "3Cus": 3,
    "4Cus": 4,
    "5(+)Cus": 5
};

function getNumPeople() {
    const sel = document.getElementById("numPeople").value;
    return customerMap[sel] || 1;
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
    updateDishPrices();
}

/* ===== DEPOSIT SETUP ===== */
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

    function updateDeposit() {
        const selected = restaurant.value;
        depositDisplay.textContent = deposits[selected] !== undefined ? deposits[selected] : "0";
    }

    restaurant.addEventListener("change", () => {
        updateDeposit();
        updateDishPrices();
    });
    updateDeposit();
}

/* ===== DISH DATA ===== */
const dishPrices = {
    "Osaka's Sushi": [9, 19, 15, 22, 40],
    "L'Olivo": [25, 20, 12, 22, 44],
    "Saigon's Kitchen": [7, 12, 16, 14, 6],
    "Route 66 Diner": [15, 6, 9, 7, 30],
    "Mokhwa Dining": [24, 18, 16, 15, 43],
    "Al Noor Spice House": [25, 16, 22, 45, 10]
};

const dishNames = {
    "Osaka's Sushi": ["6 Takoyaki balls","Okonomiyaki with beef","Eight pack Sushi","Osaka's Deluxe Ramen","400 Gram Wagyu Steak"],
    "L'Olivo": ["Capricciosa Pizza","Fettuccine Alfredo","3 scoop Gelato","Risotto ai Funghi","Seafood Linguine"],
    "Saigon's Kitchen": ["2 pack Rice Paper Rolls","Banh Mi Sandwich","Pho Beef Noodle Soup","Grilled Lemongrass Chicken","Iced Coffee"],
    "Route 66 Diner": ["Double Cheeseburger","Strawberry Milkshake","Buffalo Wings","Onion Rings","Texan Style Tomahawk Steak"],
    "Mokhwa Dining": ["Bulgogi Grill Plate","Bibimbap","Korean Fried Chicken","Kimchi Pancake","Seafood Hot Pot (Haemul Jeongol)"],
    "Al Noor Spice House": ["Lamb Kofta Skewers with Rice","Fattoush Salad","Chicken Mandi Rice","Stuffed Lamb Shoulder (Shuwa-style)","Baklava"]
};

/* ===== UPDATE DISHES ===== */
function updateDishPrices() {
    const restaurant = document.getElementById("restaurant").value;
    if (!restaurant || !dishPrices[restaurant]) return;

    for (let i = 1; i <= 5; i++) {
        const dish = document.getElementById(`dish${i}`);
        const label = document.getElementById(`dish${i}Label`);
        dish.checked = false;
        dish.value = dishPrices[restaurant][i - 1];
        label.innerText = `${dishNames[restaurant][i - 1]} ($${dishPrices[restaurant][i - 1]})`;
    }
}

/* ===== CALCULATE TOTAL ===== */
function calculateTotal() {
    const restaurant = document.getElementById("restaurant").value;
    if (!restaurant) { alert("Please select a restaurant."); return; }

    const numPeople = getNumPeople();
    const depositAmounts = {
        "Osaka's Sushi": 3,
        "L'Olivo": 5,
        "Saigon's Kitchen": 2,
        "Route 66 Diner": 1,
        "Mokhwa Dining": 3,
        "Al Noor Spice House": 2
    };

    const dishCheckboxes = document.querySelectorAll(".optionalDish");
    let total = 0;
    dishCheckboxes.forEach(dish => {
        if (dish.checked) total += parseFloat(dish.value) * numPeople;
    });

    total += depositAmounts[restaurant] !== undefined ? depositAmounts[restaurant] : 0;
    document.getElementById("totalBill").textContent = total.toFixed(2);
}

/* ===== INIT ===== */
window.onload = function () {
    autoFillRestaurant();
    setupDeposit();
    updateDishPrices();

    const calcBtn = document.getElementById("calculateTotalBtn");
    if (calcBtn) calcBtn.addEventListener("click", calculateTotal);
};