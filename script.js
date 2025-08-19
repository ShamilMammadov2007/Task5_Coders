// Product data
const products = [
    {
        id: 1,
        title: "Wireless Headphones",
        price: 99.99,
        image: "https://via.placeholder.com/250x200?text=Headphones"
    },
    {
        id: 2,
        title: "Smart Watch",
        price: 199.99,
        image: "https://via.placeholder.com/250x200?text=Smart+Watch"
    },
    {
        id: 3,
        title: "Bluetooth Speaker",
        price: 79.99,
        image: "https://via.placeholder.com/250x200?text=Speaker"
    },
    {
        id: 4,
        title: "Laptop Backpack",
        price: 49.99,
        image: "https://via.placeholder.com/250x200?text=Backpack"
    },
    {
        id: 5,
        title: "Wireless Mouse",
        price: 29.99,
        image: "https://via.placeholder.com/250x200?text=Mouse"
    },
    {
        id: 6,
        title: "USB-C Cable",
        price: 19.99,
        image: "https://via.placeholder.com/250x200?text=Cable"
    },
    {
        id: 7,
        title: "Power Bank",
        price: 39.99,
        image: "https://via.placeholder.com/250x200?text=Power+Bank"
    },
    {
        id: 8,
        title: "Phone Stand",
        price: 14.99,
        image: "https://via.placeholder.com/250x200?text=Phone+Stand"
    }
];

// DOM elements
const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cartCount = document.querySelector('.cart-count');

// Slider state
let currentPosition = 0;
let cartItems = 0;

// Initialize the slider
function initSlider() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        sliderTrack.appendChild(card);
    });

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add to cart function
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    cartItems++;
    updateCartCount();

    // You could also store which products were added here
    console.log(`Added product ${productId} to cart`);
}

// Update cart count display
function updateCartCount() {
    cartCount.textContent = cartItems;
}

// Slide to previous set of products
function slidePrev() {
    const cardWidth = document.querySelector('.product-card').offsetWidth + 16; // 16px for gap
    const maxPosition = 0;

    currentPosition = Math.min(currentPosition + cardWidth * 3, maxPosition);
    sliderTrack.style.transform = `translateX(${currentPosition}px)`;
}

// Slide to next set of products
function slideNext() {
    const cardWidth = document.querySelector('.product-card').offsetWidth + 16; // 16px for gap
    const trackWidth = sliderTrack.offsetWidth;
    const containerWidth = document.querySelector('.slider').offsetWidth;
    const maxPosition = containerWidth - trackWidth;

    currentPosition = Math.max(currentPosition - cardWidth * 3, maxPosition);
    sliderTrack.style.transform = `translateX(${currentPosition}px)`;
}

// Event listeners for buttons
prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);

// Initialize the slider when the page loads
window.addEventListener('load', initSlider);

// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});