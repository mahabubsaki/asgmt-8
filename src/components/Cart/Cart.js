import React from 'react';
import List from '../List/List';
import './Cart.css'

const Cart = ({ items, handleChooseAgainClick, handleChooseForMeClick }) => {
    return (
        <div className="cart-container">
            <div className="details">
                <h2>Cart Information</h2>
                <div className="list-container">
                    {
                        items.map(item => <List item={item} key={item.id}></List>)
                    }
                </div>
                <section>
                    <button onClick={handleChooseAgainClick} className="btn-choose">
                        Choose Again
                    </button>
                </section>
                <section>
                    <button onClick={handleChooseForMeClick} className="btn-for-me">
                        Random Choose
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Cart;