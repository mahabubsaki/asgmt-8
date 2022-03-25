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
        cartObj[id] = 1
    }
    else {
        alert("You Can't Add More Than 4 List Items")
    }
    localStorage.setItem('cart', JSON.stringify(cartObj))
}

export {
    addToLocalStorage,
}