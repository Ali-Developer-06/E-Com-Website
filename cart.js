const cartItems = document.querySelector('.cart-items');

function displayCartItems (){
    const items = JSON.parse(localStorage.getItem("cart"));
    items.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList = ("cart-item");
        cartItem.innerHTML = `
        <p>${item.id}</p>
        <p>${item.title}</p>
        <img src="${item.image}" alt="${item.title}">
        <p>${item.price}</p>
        <p>Delete</p>
        `;
        cartItems.appendChild(cartItem);
    });
}
displayCartItems();