import React from 'react';
import map from 'lodash/map';
import ListItemCard from '../listItemCard';
import { css } from "emotion";

const listContainer = css`
    height: 100vh;
    width: 550px;
    border: 1px solid black;
    display: flex;
    flex-flow: column nowrap;
    `;
    
    const collectionContainer = css`
    flex-basis: 80%;
    padding: 1em;
    overflow-y: auto;
`;

const footerContainer = css`
    height: 65px;
    width: 100%;
    border-top: 1px solid black;
    background: grey;
    display: flex;
`;

const headerContainer = css`
    height: 65px;
    width: 100%;
    border-bottom: 1px solid black;
    background: grey;
    display: flex;
`;

const totalPower = css`
    margin-left: auto;
    margin-right: 2em;
`;

const listHeader = css`
    margin: auto;
`;

const List = ({ items }) => {
    const listItems = map(items, (item, numberedIndex) => {
       return <ListItemCard item={item} key={`${numberedIndex + 1}`} numberedIndex={numberedIndex + 1} />
    });
    
    return (
        <div className={listContainer} >
            <div className={headerContainer} >
                <div className={listHeader} >
                    <h3>Build a Team!</h3>
                </div>
            </div>
            <div className={collectionContainer} >
                {listItems}
            </div>
            <div className={footerContainer} >
                <div className={totalPower} >
                    <h3>Team Power Rating: 70/100 </h3>
                </div>
            </div>
        </div>
    );
}

export default List;
