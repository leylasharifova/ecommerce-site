// ADD TO CART
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productName);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to cart!");
}

// SHOW CART
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartList = document.getElementById("cart-items");

    if (!cartList) return;

    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        let p = document.createElement("p");
        p.textContent = item;
        cartList.appendChild(p);
    });
}

// CLEAR CART
function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

// CONTACT FORM VALIDATION
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
