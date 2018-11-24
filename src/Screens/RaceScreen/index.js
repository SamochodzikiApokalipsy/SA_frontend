import React, { Component } from 'react';

import RaceContainer from '../../Containers/RaceContainer';

import './styles/default.scss';

class RaceScreen extends Component {
    render() {
        return (
            <div className="raceContainer">
                <RaceContainer />
            </div>
        );
    }
}

export default RaceScreen;