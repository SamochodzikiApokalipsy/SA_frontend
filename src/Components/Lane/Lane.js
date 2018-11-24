import React from 'react';
import Car from '../Car';

import './styles/default.scss';

const Lane = ({ carColor, carPosition }) => (
    <div className="laneContainer" >
        <div style={{ top: carPosition }} >
            <Car color={ carColor } />
        </div>
    </div>
);

export default Lane;