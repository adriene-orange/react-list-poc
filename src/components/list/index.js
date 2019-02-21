import React from 'react';
import map from 'lodash/map';
import ListItemCard from '../listItemCard';
import { css } from "emotion";

const collectionContainer = css`
    margin: 1em;
`;

const List = ({ items }) => {
    const listItems = map(items, (item, numberedIndex) => {
       return <ListItemCard item={item} key={`${numberedIndex + 1}`} numberedIndex={numberedIndex + 1} />
    });
    
    return (
        <div className={collectionContainer} >
            {listItems}
        </div>
    );
}

export default List;
