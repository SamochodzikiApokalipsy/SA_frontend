import React from 'react';
import Car from '../Car';

import './styles/default.scss';

const Lane = ({ carColor, carPosition, carName }) => (
    <div className="laneContainer" >
        <div className="carName" >
            { carName }
        </div>
        <div className="car" style={{ top: carPosition }} >
            <Car color={ carColor } />
        </div>
    </div>
);

export default Lane;