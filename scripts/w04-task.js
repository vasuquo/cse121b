/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Victor Asuquo",
  photo: "images/VApassport.png",
  favoriteFoods: [
    "Fried rice & Dodo",
    "Joloff rice & Salad",
    "Amala & Ewedu soup",
    "Pounded yam & Egusi soup",
    "Eba & Afang soup",
  ],
  hobbies: [
    "Reading",
    "Listening to music",
    "Playing table tennis",
    "Watching football, wrestling",
    "exercising",
  ],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Lagos",
  length: "8 years",
});

myProfile.placesLived.push({
  place: "Kaduna",
  length: "2 years",
});

myProfile.placesLived.push({
  place: "Ibadan",
  length: "4 years",
});

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").innerHTML = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").setAttribute("src", myProfile.photo);
document
  .getElementById("photo")
  .setAttribute("alt", `Profile of ${myProfile.name}`);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.getElementById("hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
  let dt = document.createElement("dt");
  let dd = document.createElement("dd");
  dt.textContent = place.place;
  dd.textContent = place.length;
  document.getElementById("places-lived").appendChild(dt);
  document.getElementById("places-lived").appendChild(dd);
});
