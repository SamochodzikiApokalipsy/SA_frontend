import React, { Component } from 'react';

import RaceScreen from '../Screens/RaceScreen';

import './styles/default.scss';

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
            <div className="App">
                <RaceScreen cars={ cars } />
            </div>
        );
    }
}

export default App;
