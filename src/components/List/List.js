import React from 'react';
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const List = ({ item, handleSingleDelete }) => {
    const { name, img, id } = item;
    return (
        <div className="list">
            <img src={img} alt="fruit" />
            <p>{name}</p>
            <div>
                <button onClick={() => handleSingleDelete(id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default List;