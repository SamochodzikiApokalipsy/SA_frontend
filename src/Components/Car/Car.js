import React from 'react';

import './styles/default.scss';

const Car = ({color}) => (
    <div className="carContainer" style={{backgroundColor: color}} />
);

export default Car;