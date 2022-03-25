import React, { useEffect, useState } from 'react';
import './Main.css'
import EachItem from '../EachItem/EachItem'
import Cart from '../Cart/Cart';

const Main = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    console.log(foods)
    return (
        <div>
            <div className="main-container">
                <div className="product-container">
                    <h2>You can add Only 4 Foods</h2>
                    <div className="products">
                        {
                            foods.map(food => <EachItem item={food} key={food.id}></EachItem>)
                        }
                    </div>
                </div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;