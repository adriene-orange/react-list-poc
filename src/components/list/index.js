import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { css } from "emotion";

import ListItemCard from '../listItemCard';
import * as listActionCreators from '../../actions/list';

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

const List = ({ items, handleRemoveListItem, handleToggleSelectListItem, teamPowerTotal }) => {
    const listItems = map(items, (item, i) => {
        const removeItemFromList = () => handleRemoveListItem(item);
       return (
           <ListItemCard
                item={item}
                key={`${i + 1}`}
                index={i}
                handleRemoveListItem={removeItemFromList}
                handleToggleSelectListItem={handleToggleSelectListItem}
            />
        )
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
                    <h3>Team Power Rating: {teamPowerTotal}/100 </h3>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ((state) => ({
    // TODO: create selectors for generating total
    items: state.listItems,
}));

const mapDispatchToProps = (dispatch) => ({
    handleRemoveListItem: (item) => dispatch(listActionCreators.removeItemFromListRequest(item)),
    handleToggleSelectListItem: (item) => dispatch(listActionCreators.toggleSelectItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
