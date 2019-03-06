import React, { useCallback } from 'react';
import { css } from "emotion";
import map from 'lodash/map';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import ListItemCard from './listItemCard';
import Header from './header';
import Footer from './footer';
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

const List = ({ items, handleRemoveListItem, handleToggleSelectListItem }) => {
    const removeHandler = useCallback(handleRemoveListItem);
    const selectHandler = useCallback(handleToggleSelectListItem);
    const listItems = map(items, (item, i) => {
        const uniqueKey = `character_${item.id}`;
        return (
               <ListItemCard
                    item={item}
                    key={uniqueKey}
                    index={i}
                    handleRemoveListItem={() => removeHandler(item)}
                    handleToggleSelectListItem={() => selectHandler(item)}
                />
        )
    });
    return (
        <div className={listContainer} >
           <Header />
            <div className={collectionContainer} >
                {listItems}
            </div>
            <Footer />
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
