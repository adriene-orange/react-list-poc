import React, { useCallback } from 'react';
import { css } from "emotion";
import map from 'lodash/map';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import ListItemCard from './listItemCard';
import * as listActionCreators from '../../actions/list';

const getItems = (state) => get(state, 'listItems');

const selectItems = createSelector(getItems, (results) => results);

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

const List = ({ items, handleRemoveListItem, handleToggleSelectListItem }) => {
    const removeHandler = useCallback(handleRemoveListItem);
    const selectHandler = useCallback(handleToggleSelectListItem);
    const listItems = map(items, (item, i) => {
        return (
               <ListItemCard
                    item={item}
                    key={uniqueId(`character_${item.uiStatus}`)}
                    index={i}
                    handleRemoveListItem={() => removeHandler(item)}
                    handleToggleSelectListItem={() => selectHandler(item)}
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
                    <h3>Team Power Rating: /100 </h3>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ((state) => ({
    // TODO: create selectors for generating total
    items: selectItems(state),
}));

const mapDispatchToProps = (dispatch) => ({
    handleRemoveListItem: (item) => dispatch(listActionCreators.removeItemFromListRequest(item)),
    handleToggleSelectListItem: (item) => {
        if (item.uiStatus !== 'LOADING') {
            dispatch(listActionCreators.toggleSelectItem(item))
        }
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(List);
