// copyright year
document.querySelector("#year").textContent = new Date().getFullYear();

/* Declare variables for html elements */
const productsElement = document.querySelector(".products");
const cartList = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".total");
const filterCategory = document.querySelector("#filter-category");
const sortPrice = document.querySelector("#filter-sort");
const button = document.querySelector("button");

/* Declare array variable for cart items */
const cartItems = [];

/* async getProducts Function to fetch shopping products */
const getProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);

  if (response.ok) {
    const productList = await response.json();

    /* Store fecthed products in local storage */
    localStorage.setItem("data", JSON.stringify(productList));

    displayProducts(productList);
  }
};

/* displayProducts function to display products on sale */
const displayProducts = (products) => {
  reset(1);
  products.forEach((product) => {
    let li = document.createElement("li");
    let title = product.title.replace("'", "");
    let item = `${product.id}%${product.price}%${product.image}%${title}`;

    li.innerHTML = ` 
          <div class="product">
          <a href="#"${product.id}>
          <img src=${product.image} alt=${product.title} />
          <p>${product.title}</p>
          </a>
          <div class="product-price">
            <div>${formatCurrency(product.price)}</div>
            <button onClick="addToCart('${item}')" class="button primary">Add to Cart</button>
          </div>
          </div>`;

    productsElement.appendChild(li);
  });

  document.querySelector("#header").textContent = `Cart is empty`;

  countProducts(products);
};

/* Currency format function to format item price */
const formatCurrency = (num) => {
  const convNum = Number(num.toFixed(2)).toLocaleString();
  return `$${convNum} `;
};

/* AddToCart function to add items to cart      */
const addToCart = (product) => {
  let itemArray = product.split("%");
  let id = itemArray[0];
  let price = itemArray[1];
  let imageUrl = itemArray[2];
  let title = itemArray[3];
  let alreadyInCart = false;

  if (cartItems.length === 0) {
    alreadyInCart = false;
  } else {
    cartItems.forEach((item) => {
      if (item.id === id) {
        item.count++;
        alreadyInCart = true;
      }
    });
  }

  if (!alreadyInCart) {
    cartItems.push({
      id: id,
      title: title,
      price: price,
      image: imageUrl,
      count: 1,
    });
  }

  displayCart();
};

/* displayCart Displays cart content */
const displayCart = () => {
  const itemCount = cartItems.length;
  let header = document.querySelector("#header");
  if (itemCount === 0) {
    header.textContent = `Cart is empty`;
  } else {
    header.innerHTML = `You have ${itemCount} item(s) in cart`;
  }

  reset(2);

  cartItems.forEach((item) => {
    let li = document.createElement("li");

    li.innerHTML = `  
        <div>
          <img src=${item.image} alt=${item.title} />
        </div>
        <div>
          <div>${item.title}</div>
          <class="right">
             ${formatCurrency(parseFloat(item.price))} x ${
               item.count
             }           
            <button class="button" onClick="removeFromCart('${
              item.id
            }')">Remove</button>
          </div>          
        </div>    
    `;

    cartList.appendChild(li);
  });

  const total_in_cart = cartItems.reduce((a, p) => a + p.price * p.count, 0);
  if (total_in_cart > 0) {
    cartTotal.innerHTML = `Total:  ${formatCurrency(total_in_cart)}`;
  }
};

/* removeFromCart function removes items from cart  */
const removeFromCart = (id) => {
  let i = 0;

  while (i < cartItems.length) {
    if (cartItems[i].id === id) {
      cartItems.splice(i, 1);
    } else {
      ++i;
    }
  }

  displayCart();
};

/* reset Function to clear content of html elements */
const reset = (num) => {
  if (num === 1) {
    productsElement.innerHTML = "";
  } else {
    cartList.innerHTML = "";
    cartTotal.innerHTML = "";
  }
};

/* countProducts count and show product counts */
const filterProducts = (products) => {
  let productResult = document.querySelector(".filter-result");
  let productCount = products.length;
  productResult.innerHTML = `${productCount} products`;
};

/* filterByCategory function filters products by category  */
const filterByCategory = (products) => {
  const selected = filterCategory.value;
  const selectedProducts = products.filter(
    (product) => product.category === selected,
  );
  if (selectedProducts.length === 0 && selected === "ALL") {
    displayProducts(products);
  } else {
    displayProducts(selectedProducts);
  }
};

/* sortByPrice function sorts products by price */
const sortByPrice = (products) => {
  const sortValue = sortPrice.value;
  sortedProducts = products.sort((a, b) =>
    sortValue === "lowest"
      ? a.price > b.price
        ? 1
        : -1
      : sortValue === "highest"
        ? a.price < b.price
          ? 1
          : -1
        : a.id < b.id
          ? 1
          : -1,
  );

  displayProducts(sortedProducts);
};

/* Display Shooping cart */
getProducts();
const products = JSON.parse(localStorage.getItem("data"));

/* Event Listeners */
filterCategory.addEventListener("change", () => filterByCategory(products));
sortPrice.addEventListener("change", () => sortByPrice(products));
