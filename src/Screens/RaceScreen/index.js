import React, { Component } from 'react';

import RaceContainer from '../../Containers/RaceContainer';

import './styles/default.scss';

class RaceScreen extends Component {
    render() {
        return (
            <div className="raceScreenContainer" >
                <RaceContainer />
                <div className="finishText">
                    The end is near
                </div>
            </div>
        );
    }
}

export default RaceScreen;