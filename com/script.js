// script.js

// Sample products data
const products = [
    { id: 1, name: 'realme', price: 100, image: 'https://m.media-amazon.com/images/I/61QiBo-sPTL._AC_UY218_.jpg'},
    { id: 2, name: 'oneplus', price: 150, image: 'https://m.media-amazon.com/images/I/614jVFiQpLL._AC_UY218_.jpg' },
    { id: 3, name: 'samsung', price: 500, image:'https://m.media-amazon.com/images/I/71Sm+xKNZnL._AC_UY218_.jpg'},
    { id: 4, name: 'vivo', price: 60, image: 'https://m.media-amazon.com/images/I/61BztsGKQTL._AC_UY218_.jpg'},
    { id: 5, name: 'redmi', price: 80, image: 'https://m.media-amazon.com/images/I/71wXX5IRnzL._AC_UY218_.jpg'},
    { id: 6, name: 'google', price: 120, image: 'https://m.media-amazon.com/images/I/71HS506liEL._AC_UY218_.jpg'},
    { id: 7, name: 'intex', price: 200, image: 'https://m.media-amazon.com/images/I/71aTghUQfqL._AC_UY218_.jpg'},
    // Add more products as needed
];
  
  // Initialize cart as an empty array
  let cart = [];
  
  // Function to display products on the page
  function displayProducts() {
    const productList = document.getElementById('product-list');
  
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productItem);
    });
  }
  
  // Function to add a product to the cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    updateCart();
  }
  
  // Function to update the cart displayed on the page
  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
  
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
      `;
      cartItems.appendChild(cartItem);
    });
  
    // Show the cart section
    document.getElementById('cart').classList.remove('hidden');
  }
  
  // Function to handle form submission for checkout
  document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Example: Submit data to a server or display a thank you message
    alert(`Thank you, ${name}! Your order has been placed.`);
    // Clear the cart after successful checkout
    cart = [];
    updateCart();
  });
  
  // Initialize the page
  displayProducts();
  
