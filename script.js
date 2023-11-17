document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.parentNode;
            const productId = product.getAttribute('data-id');
            const productName = product.querySelector('h3').innerText;

            // Create a new cart item
            const cartItem = document.createElement('li');
            cartItem.innerText = productName;
            cartItemsList.appendChild(cartItem);
        });
    });
});
