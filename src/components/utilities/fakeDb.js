const addToLocalStorage = (id) => {
    let cartObj;
    const cart = localStorage.getItem('cart');
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {};
    }
    if (Object.keys(cartObj).length <= 3) {
        if (cartObj[id]) {
            alert("Already added this product to cart")
        }
        cartObj[id] = 1
    }
    else {
        alert("You Can't Add More Than 4 List Items")
    }
    localStorage.setItem('cart', JSON.stringify(cartObj))
}

const removeFromLocalStorage = (id) => {
    let cartObj;
    const cart = localStorage.getItem('cart');
    if (cart) {
        cartObj = JSON.parse(cart)
        delete cartObj[id]
    }
    else {
        cartObj = {};
    }
    localStorage.setItem('cart', JSON.stringify(cartObj))
}
export {
    addToLocalStorage,
    removeFromLocalStorage,
}