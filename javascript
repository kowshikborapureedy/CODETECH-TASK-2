// JavaScript to handle cart functionality
document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartContainer = document.querySelector(".cart-items");

    // Add to Cart Buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const productCard = button.closest(".card");
            const productName = productCard.querySelector(".card-title").textContent;
            const productPrice = productCard.querySelector(".card-text").textContent;

            // Add product to cart array
            cart.push({ name: productName, price: productPrice });
            updateCartUI();
        });
    });

    // Update the Cart UI
    function updateCartUI() {
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p class='text-center'>Your cart is empty.</p>";
            return;
        }

        const cartList = document.createElement("ul");
        cartList.classList.add("list-group");
        
        cart.forEach((item, index) => {
            const cartItem = document.createElement("li");
            cartItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            cartItem.textContent = ${item.name} - ${item.price};

            const removeButton = document.createElement("button");
            removeButton.classList.add("btn", "btn-danger", "btn-sm");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
                cart.splice(index, 1);
                updateCartUI();
            });

            cartItem.appendChild(removeButton);
            cartList.appendChild(cartItem);
        });

        cartContainer.appendChild(cartList);
    }
});
