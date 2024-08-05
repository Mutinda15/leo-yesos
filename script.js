// Function to add product to cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    alert(`${product.name} has been added to your cart.`);
}

// Function to display cart
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ksh${item.price}`;
        cartItems.appendChild(li);
    });
}

// Display cart on page load
displayCart();

// Sample product data
const products = [
    {
        name: "2 in 1 Dumpling maker",
        price: 600,
        oldPrice: 650,
        url: "dumplingmaker.html"
    },
    {
        name: "3 in 1 Kitchen Knife Set",
        price: 1200,
        oldPrice: 1500,
        url: "knifeset.html"
    },
    // Add more products here
];

// Attach event listeners for all add-to-cart buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(products[index]);
    });
});
