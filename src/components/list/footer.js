import React from 'react';
import { css } from "emotion";

const footerContainer = css`
    height: 65px;
    width: 100%;
    border-top: 1px solid black;
    background: grey;
    display: flex;
    flex-basis: 10%;
`;

const totalPower = css`
    margin-left: auto;
    margin-right: 2em;
`;

const ListFooter = ({ powerTotal}) => (
    <div className={footerContainer} >
        <div className={totalPower} >
            <h3>Team Power Rating: </h3>
            {powerTotal}
        </div>
    </div>
);

export default ListFooter;