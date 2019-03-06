import React from 'react';
import { css } from "emotion";

const headerContainer = css`
    height: 65px;
    width: 100%;
    border-bottom: 1px solid black;
    background: grey;
    display: flex;
`;

const listHeader = css`
    margin: auto;
`;

const ListHeader = () => (
    <div className={headerContainer} >
        <div className={listHeader} >
            <h3>Build a Team!</h3>
        </div>
    </div>
);

export default ListHeader;