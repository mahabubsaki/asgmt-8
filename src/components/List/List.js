import React from 'react';
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const List = ({ item }) => {
    const { name, img } = item;
    return (
        <div className="list">
            <img src={img} alt="" />
            <p>{name}</p>
            <div>
                <button>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default List;