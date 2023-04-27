// Create customer object with initial properties
const customer = {
firstName: "jake",
lastName: "smith",
email: "jaekSmih!aol.com",
phone: "undefined",
zipCode: "631",
favoriteFlavors: "32",
cupSize: "medium",
favoriteStore: "Target",
firstVisit: "false",
};
// Modify properties with bracket notation
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234
customer["zipCode"] = "63132"
customer["favoriteFlavors"] = ["coffee","strawberry","matcha"];
// Delete properties with delete keyword
delete customer["zipCode"];
delete customer["favoriteStore"];
// Add new properties with dot notation
customer.toppings= ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors= "mango";
customer.todaysPurchaseCost= 5.32;

// Print keys in customer object
console.log(Object.keys(customer));
