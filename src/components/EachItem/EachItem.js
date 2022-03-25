import React from 'react';
import './EachItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EachItem = (props) => {
    const { name, price, img } = props.item
    return (
        <div className="item">
            <div className="info-div">
                <img src={img} alt="food" />
                <h1>{name}</h1>
                <h2>৳{price}</h2>
            </div>
            <button>Add To List
                <FontAwesomeIcon icon={faPlus} className="icon"></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default EachItem;