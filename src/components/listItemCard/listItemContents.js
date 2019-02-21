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

const listItemFooter = css`
    display: flex;
    margin: 1em 0;
    justify-content: space-between;
    h4 {
        margin-top: 0;
        margin-bottom: 0;
    }
`;

const ListItemContent = ({ item }) => {
    const {
        name,
        description,
        avatar,
        mainClass,
        subClass,
    } = item;

    const body = (
        <div className={listItemBody}>
            <img src={avatar} alt={`Avatar of ${name}`} height="100px" className={listItemImage} />
            <div className={listItemDescription} >
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );

    const footer = (
        <div className={listItemFooter} >
            <div>
                {`${mainClass} (${subClass})`}
            </div>
            <div>
                <h4>Power Rating: 70/100</h4>
            </div>
        </div>
    );
    return <div className={listItemContent} >
        {body}
        {footer}
    </div>

}

export default ListItemContent;