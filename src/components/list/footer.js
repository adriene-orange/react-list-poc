import React from 'react';
import { css } from "emotion";

const footerContainer = css`
    height: 65px;
    width: 100%;
    border-top: 1px solid black;
    background: grey;
    display: flex;
`;

const totalPower = css`
    margin-left: auto;
    margin-right: 2em;
`;

const ListFooter = ({ power=0 }) => (
    <div className={footerContainer} >
        <div className={totalPower} >
            <h3>Team Power Rating: {power}/100 </h3>
        </div>
    </div>
);

export default ListFooter;