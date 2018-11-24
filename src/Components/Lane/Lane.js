import React from 'react';
import Car from '../Car';

import './styles/default.scss';

const Lane = ({ carColor, carPosition }) => (
    <div className="laneContainer" >
        <div style={{ marginLeft: carPosition }} >
            <Car color={ carColor } />
        </div>
    </div>
);

export default Lane;