import React, { Component } from 'react';

import Lane from '../../Components/Lane';

import './styles/default.scss';

class RaceScreen extends Component {
    render() {
        const { cars } = this.props;
        return (
            <div>
                {cars.map(car => (<Lane carColor={ car.color } carPosition={ `${car.position}vw` } />))}
            </div>
        );
    }
}

export default RaceScreen;