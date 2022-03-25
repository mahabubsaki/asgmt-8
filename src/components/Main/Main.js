import React, { useEffect, useState } from 'react';
import './Main.css'
import EachItem from '../EachItem/EachItem'
import Cart from '../Cart/Cart';
import { addToLocalStorage, removeFromLocalStorage } from '../utilities/fakeDb';

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
    const localStorageArray = () => {
        const storageItems = JSON.parse(localStorage.getItem('cart'))
        let storedArray = []
        for (let id in storageItems) {
            const matched = foods.find(food => food.id === id)
            if (matched) {
                storedArray.push(matched)
            }
        }
        return storedArray
    }
    const handleClick = (item) => {
        addToLocalStorage(item.id)
        const storedArray = localStorageArray()
        setList(storedArray)
    }
    const handleChooseAgainClick = () => {
        localStorage.removeItem('cart')
        setList([])
    }
    const handleChooseForMeClick = () => {
        const storedArray = localStorageArray()
        const index = Math.floor(Math.random() * storedArray.length)
        const random = storedArray[index]
        if (random) {
            localStorage.removeItem('cart')
            addToLocalStorage(random.id)
            setList([random])
            alert(`Randomly choosed to buy ${random.name}`)
        }
        else {
            alert("To get a random food please add food to list")
        }
    }
    const handleSingleDelete = (id) => {
        removeFromLocalStorage(id)
        const storedArray = localStorageArray()
        const filtered = storedArray.filter(item => item.id !== id)
        setList(filtered)
    }
    return (
        <div>
            <div className="main-container">
                <div className="product-container">
                    <h2>You can add Only 4 Foods</h2>
                    <h1>Confused Buyer</h1>
                    <div className="products">
                        {
                            foods.map(food => <EachItem item={food} key={food.id} handleClick={handleClick}></EachItem>)
                        }
                    </div>
                </div>
                <Cart items={list} handleChooseAgainClick={handleChooseAgainClick} handleChooseForMeClick={handleChooseForMeClick} handleSingleDelete={handleSingleDelete}></Cart>
            </div>
        </div>
    );
};

export default Main;