import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaceScreen from '../Screens/RaceScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

import './styles/default.scss';

const mapStateToProps = state => ({
    isRaceScreen: state.screens.race,
});

class App extends Component {
    render() {
        const {isRaceScreen} = this.props;
        if(isRaceScreen) {
            return (
                <div className="App">
                    <RaceScreen />
                </div>
            )
        }
        else {
            return (
                <div className="App">
                    <WelcomeScreen />
                </div>
            );
        }
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
