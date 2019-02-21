import React from 'react';
import { css } from "emotion";

const listItemNumber = css`
    flex: 0 1 5%;
`;

const ListItemNumber = ({ numberedIndex }) => (
    <div className={listItemNumber}>
        {numberedIndex ? `${numberedIndex}.` : '\u00A0'}
    </div>
);

export default ListItemNumber;
