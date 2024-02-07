/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    let articleElement = document.createElement("article");
    let h3Element = document.createElement("h3");
    h3Element.textContent = temple.templeName;
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", temple.imageUrl);
    imgElement.setAttribute("alt", temple.location);
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const url =
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
  const response = await fetch(url);

  if (response.ok) {
    templeList = await response.json();
    displayTemples(templeList);
  }
};

/* reset Function */
const reset = () => {
  document.getElementById("temples").innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (temples) => {
  reset();
  const filter = document.querySelector("#filtered").value;

  switch (filter) {
    case "utah":
      displayTemples(
        templeList.filter((temple) => temple.location.includes("Utah")),
      );
      break;
    case "notutah":
      displayTemples(
        templeList.filter((temple) => !temple.location.includes("Utah")),
      );
      break;
    case "older":
      displayTemples(
        templeList.filter(
          (temple) => parseInt(temple.dedicated.substring(0, 4)) < 1950,
        ),
      );

      break;
    case "all":
      displayTemples(templeList);
      break;
    case "sort":
      sortBy();
      break;
    default:
      break;
  }
};

/* sortBy function */
const sortBy = () => {
  let sorted = templeList.sort((p1, p2) =>
    p1.templeName > p2.templeName ? 1 : p1.templeName < p2.templeName ? -1 : 0,
  );
  displayTemples(sorted);
};

/* Stretch add option for sorting */
let select = document.querySelector("#filtered");
let option = document.createElement("option");
option.value = "sort";
option.innerHTML = "Sort Alphabetically";
select.appendChild(option);

/* Event Listener */
document
  .querySelector("#filtered")
  .addEventListener("change", () => filterTemples(templeList));

getTemples();
