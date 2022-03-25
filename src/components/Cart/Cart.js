import React from 'react';
import List from '../List/List';
import './Cart.css'

const Cart = ({ items }) => {
    console.log(items)
    return (
        <div className="cart-container">
            <div className="details">
                <h2>Cart Information</h2>
                <div className="list-container">
                    {
                        items.map(item => <List item={item}></List>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;