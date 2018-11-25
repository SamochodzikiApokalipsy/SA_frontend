import React from 'react';

import './styles/default.scss';

const Car = ({color, texture}) => (
    <div className="carContainer">
        <img src={ texture } />
    </div>
);

export default Car;