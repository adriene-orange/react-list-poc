import React from 'react';
import ListItemNumber from './listItemNumber';
import ListItemContents from './listItemContents';
import CardWrapper from '@quotecenter/component-library/CardWrapper';
import Checkbox from "@quotecenter/component-library/Checkbox";
import { css } from "emotion";

const flexRow = css`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const productDescriptionCard = css`
    display: flex;
    flex: 0 1 500px;
    margin-left: 1em;
    margin-bottom: 0.5em;
    background-color: #fff;
`;

const ListItemCard = ({ item, numberedIndex }) => {
    return (
        <div className={flexRow}>
            <Checkbox
                checked={item.isSelected}
            />
            <CardWrapper className={productDescriptionCard}  padding="medium" >
                <ListItemNumber numberedIndex={numberedIndex} />
                <ListItemContents item={item} />
            </CardWrapper>
        </div>
    );
};

export default ListItemCard;
