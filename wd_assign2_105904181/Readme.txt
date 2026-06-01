assignment2


1. structure
├─ index.html          # Home page 
├─ restaurants.html    # Restaurant listing – 6 restaurants with name, cuisine, signature dishes, prices, deposit, image, short description
├─ recommend.html      # Restaurant recommendation – form for dietary preference, budget and dining purposes
├─ register.html       # User registration form 
├─ reservation.html    # Reservation form 
├─ bill.html           # Estimated bill calculator 
├─ css/
│  ├─ style.css       # External CSS applied to index.html (home page)
│  ├─ REG.css         # Registration page CSS
│  ├─ Reservation.css # Reservation page CSS
│  ├─ restaurantsColor.css # Restaurant listing CSS
│  ├─ recommendation.css  # Recommendation page CSS
│  └─ Bill.css        # Bonus page CSS
├─ js/
│  ├─ script.js       # General JS (if any)
│  ├─ registration.js # Registration form JavaScript validation
│  ├─ reservation.js  # Reservation form JavaScript validation
│  ├─ recommendation.js # Recommendation JavaScript logic
│  └─ bill.js         # Bill calculator page functionality
├─ images/             # All images used in the site
│  ├─ ITN.jpg # Photo for L'Olivo in Restaurant Page
│  ├─ JPN.jpg  # Photo for Osaka's Sushi in Restaurant Page
│  ├─ KRN.jpg # Photo for Mokhwa Dining in Restaurant Page
│  ├─ MEast.jpg # Photo for Al Noor's spice house in Restaurant Page
│  ├─ USA.jpg  # Photo for Route 66 dining in Restaurant Page
│  └─ VTN.jpg   # Photo for Saigon's Kitchen in Restaurant Page
├─ Menu.jpg     # Display photo on home page
└─ Readme.txt          # This file 



2.
This website uses Javascript to make sure that the users will be required to put information and also checks to make sure it meets the demands,
some examples being that on the registeration page, the script will look through if the texts are filled and also including specific requirements like on the username name tag, you have to include a "@", the phone number has to be 8 to 15 digits long and a gender being selected, if none of these are filled correctly, it will give the users errors on what they did not do right.

on the reservation page, much like registeration, it also makes sure that it includes the first name, last name, phone number and email but also, coming with new validations with some being picking a date for reserving the restaurant and it must be only future dates and the reservation must be placed between 9 am to 10pm.
The deposit amount will change when the user changes the restaurant choice to a number based on how much the customers have to pay for reserve fees, picking between voucher and credit card option for payment and when clicked one between the two, a text bar will appear to put down a specific amounts of numbers for payment (12 digits for vouchers and 15/16 for online, which are credit cards)

in the recommendation page, the script will look through what user has put, which are dietary preferences, budget and reasons for eating out and when they are picked, the script will find the best match for recommendation, which can be selected and directing to reservation page.

and finally, in the bill page, the script will calculate how much the user will pay on the restaurant based on what they are ordering, with the use of which restaurant (that picks out the deposit fee amount), how many customers which will multiply to that number and for optional dishes that have 5 each will have some dishes that the user can pick, which increases the price and the meals change if the restaurants are changed and finally, when the user is done, they will click on the submit button and the script will give out the total price.





3. Limitations

This website also has some planned limitations, mainly on registeration and reservation page with some examples being that in reservation's page, for picking a reservation date, it must only be a future date as the website will reject a past date, 
the phone number section in both register and reserve page only allows digits with putting around 8 to 15 numbers, 
the restaurant recommendation choice in recommendation page, it will use a basic rule based matching and does not use any forms of AI or user data and lastly, the credit card section in reserve page, it does not include a credit card validator, meaning it will not check if the card is real.


4. 
photo sources:

menu photo:
https://www.pexels.com/photo/gourmet-meal-with-red-wine-in-calabria-36702875/


pic 1: Osaka's Sushi
https://www.pexels.com/photo/interior-design-of-traditional-japanese-restaurant-15849845/


pic 2: L'Olivo 
https://www.pexels.com/photo/exterior-of-the-olivo-margate-italian-restaurant-in-margate-england-uk-26087383/

pic 3: Saigon's Kitchen
https://www.pexels.com/photo/summer-garden-at-restaurant-14262609/

pic 4: Mokhwa's Dining
https://www.pexels.com/photo/exterior-of-a-store-21576130/

pic 5: Route 66 Dining
https://www.pexels.com/photo/retro-diner-interior-with-vintage-decor-36550107/

pic 6: Al noor's Spice house
https://www.pexels.com/photo/charming-cafe-interior-in-dubai-with-rustic-decor-31943327/

5. 
Github link: https://github.com/TheJSEnjoyer/wd_assign2_105904181
