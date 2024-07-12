// script.js

// Sample products data
const products = [
    { id: 1, name: 'realme', price: 100, image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg'},
    { id: 2, name: 'oneplus', price: 150, image: 'https://www.jiomart.com/images/product/original/491997450/oneplus-w501gb-limited-edition-smart-watch-with-up-to-14-days-battery-life-cobalt-digital-o491997450-p590809378-0-202109300107.jpeg?im=Resize=(1000,1000)' },
    { id: 3, name: 'samsung', price: 500, image:'data:image/jpeg;base64,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'}// Add more products as needed
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
  