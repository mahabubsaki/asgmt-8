import React, { useEffect, useState } from 'react';
import './Main.css'
import EachItem from '../EachItem/EachItem'
import Cart from '../Cart/Cart';
import { addToLocalStorage } from '../utilities/fakeDb';

const Main = () => {
    const [foods, setFoods] = useState([])
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    useEffect(() => {
        const storageItems = JSON.parse(localStorage.getItem('cart'))
        let storedArray = []
        for (let id in storageItems) {
            const matched = foods.find(food => food.id === id)
            if (matched) {
                storedArray.push(matched)
            }
        }
        setList(storedArray)
    }, [foods])
    const handleClick = (item) => {
        addToLocalStorage(item.id)
        const storageItems = JSON.parse(localStorage.getItem('cart'))
        let storedArray = []
        for (let id in storageItems) {
            const matched = foods.find(food => food.id === id)
            if (matched) {
                storedArray.push(matched)
            }
        }
        setList(storedArray)
    }
    return (
        <div>
            <div className="main-container">
                <div className="product-container">
                    <h2>You can add Only 4 Foods</h2>
                    <div className="products">
                        {
                            foods.map(food => <EachItem item={food} key={food.id} handleClick={handleClick}></EachItem>)
                        }
                    </div>
                </div>
                <Cart items={list}></Cart>
            </div>
        </div>
    );
};

export default Main;