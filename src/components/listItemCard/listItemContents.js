import React from 'react';
import { css } from "emotion";

const listItemContent = css`
    flex: 1 1 95%;
`;

const listItemBody = css`
    display: flex;
`;

const listItemImage = css`
    margin-right: 1em;
`;

const listItemDescription = css`
    flex: 0 1 70%;
    h4 {
        margin-top: 0;
    }
`;



const ListItemContent = ({ item }) => {
    const {
        name,
        description,
        avatar,
    } = item;

    const body = (
        <div className={listItemBody}>
            <img src={avatar} alt={`Avatar of ${name}`} height="100px" className={listItemImage} />
            <div className={listItemDescription} >
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
    return <div className={listItemContent} >
        {body}
    </div>

}

export default ListItemContent;