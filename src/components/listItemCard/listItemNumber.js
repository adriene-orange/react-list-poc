import React from 'react';

const ListItemNumber = ({ numberedIndex }) => (
    <div className="list-item-number">
        {numberedIndex ? `${numberedIndex}.` : '\u00A0'}
    </div>
);

export default ListItemNumber;
