import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RaceScreen from '../Screens/RaceScreen';

import './styles/default.scss';
import image from './styles/rays.png';

import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <div className="App">
                    <h1 className="title">
                            What will destroy us
                    </h1>
                    <div className="content">
                        <img src={ image } />
                        <RaceScreen />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
