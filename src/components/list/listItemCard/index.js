import React from 'react';
import ListItemNumber from './listItemNumber';
import ListItemContents from './listItemContents';
import DeleteListItemButon from './deleteListItemButton';
import CardWrapper from '@quotecenter/component-library/CardWrapper';
import Checkbox from "@quotecenter/component-library/Checkbox";
import { css } from "emotion";

const flexRow = css`
    display: flex;
    flex-direction: row;
`;

const productDescriptionCard = css`
    display: flex;
    flex: 0 1 500px;
    margin-left: 1em;
    margin-bottom: 0.5em;
    background-color: #fff;
`;

const checkBox = css`
    height: 1em;
    width: 1em;
    margin: 1em 0;
`;

const ListItemCard = ({ item, index, handleRemoveListItem, handleToggleSelectListItem }) => {
    const { uiStatus } = item;
    return (
        <div className={flexRow} onClick={handleToggleSelectListItem} >
            <Checkbox
                className={checkBox}
                defaultChecked={item.isSelected}
                disabled={uiStatus !== 'LOADED'}
            />
            <CardWrapper className={productDescriptionCard}  padding="medium" >
                <ListItemNumber numberedIndex={index+1} />
                <ListItemContents item={item} loadingStatus={item.uiStatus} />
                <DeleteListItemButon handleRemoveListItem={handleRemoveListItem} />
            </CardWrapper>
        </div>
    );
};


export default ListItemCard;
