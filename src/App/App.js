import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RaceScreen from '../Screens/RaceScreen';

import './styles/default.scss';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <div className="App">
                    <h1 className="title">Samochodziki apokalipsy</h1>
                    <RaceScreen />
                </div>
            </Provider>
        );
    }
}

export default App;
