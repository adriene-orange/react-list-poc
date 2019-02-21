import React from 'react';
import { css } from "emotion";

const buttonStyle = css`
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 50%;
    background: transparent;
    text-align: center;
    cursor: pointer;
    opacity: 1;
`;

const DeleteLstItemButton = ({ listItemId, removeListItemFromList }) => {
    const removeItemHandler = () => true;
    return (
        <button onClick={removeItemHandler} className={buttonStyle} >
            X
        </button>
    );
};

export default DeleteLstItemButton;