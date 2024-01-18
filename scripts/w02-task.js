/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Victor Asuquo";
const currentYear = new Date().getFullYear();
const profilePicture = "images/VApassport.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFood = [
  "Fried rice & Dodo",
  "Joloff rice & Salad",
  "Amala & Ewedu soup",
  "Pounded yam & Egusi soup",
  "Eba & Afang soup",
];

foodElement.innerHTML = favoriteFood;

const singleFood = "Plantain Porridge";
favoriteFood.push(singleFood);

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();

foodElement.innerHTML += `<br>${favoriteFood}`;
