const products = [
  { name: "Smartphone", category: "electronics", price: 29999, rating: 4.5, image: "images/smartphone.jpg" },
  { name: "Headphones", category: "electronics", price: 1999, rating: 4.2, image: "images/headphones.jpg" },
  { name: "Smartwatch", category: "electronics", price: 4999, rating: 4.4, image: "images/smartwatch.jpg" },
  { name: "Bluetooth Speaker", category: "electronics", price: 2499, rating: 4.3, image: "images/speaker.jpg" },
  { name: "Laptop", category: "electronics", price: 58999, rating: 4.6, image: "images/laptop.jpg" },

  { name: "Jeans", category: "fashion", price: 1299, rating: 4.0, image: "images/jeans.jpg" },
  { name: "T-shirt", category: "fashion", price: 799, rating: 4.1, image: "images/tshirt.jpg" },
  { name: "Sneakers", category: "fashion", price: 2499, rating: 4.5, image: "images/sneakers.jpg" },

  { name: "Wall Clock", category: "home", price: 699, rating: 4.0, image: "images/wallclock.jpg" },
  { name: "Table Lamp", category: "home", price: 999, rating: 4.3, image: "images/tablelamp.jpg" },
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

function displayProducts(filteredProducts) {
  productContainer.innerHTML = "";
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    productContainer.appendChild(card);
  });
}

function filterAndSort() {
  let filtered = [...products];
  const category = categoryFilter.value;
  const sort = sortFilter.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortFilter.addEventListener("change", filterAndSort);

displayProducts(products);
