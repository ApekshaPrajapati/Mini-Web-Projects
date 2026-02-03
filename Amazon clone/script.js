// Cart counter
let cartCount = 0;

// Select cart count element
const cart = document.getElementById("cart-count");

// Add to cart function
function addToCart() {
    cartCount++;
    cart.innerText = cartCount;
    alert("Item added to cart!");
}

// Search functionality
function searchProduct() {
    let searchValue = document.getElementsByClassName("search-input").value;

    if (searchValue === "") {
        alert("Please enter a product name");
    } else {
        alert("You searched for: " + searchValue);
    }
}
