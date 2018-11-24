import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RaceScreen from '../Screens/RaceScreen';

import './styles/default.scss';
import store from './store';

const cars = [
    {
        color: "#fa21fa",
        position: 10,
    },
    {
        color: "#2aaffa",
        position: 30,
    },
    {
        color: "#121212",
        position: 70,
    },
];

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
