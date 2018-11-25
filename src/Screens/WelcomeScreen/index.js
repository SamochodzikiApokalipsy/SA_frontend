import React, { Component } from 'react';
import { connect } from 'react-redux';

import {screenChangeAction} from '../../Redux/screens/actions';
import './styles/default.scss';

const mapDispatchToProps = dispatch => ({
    onButtonClick: () => dispatch(screenChangeAction()),
});

class WelcomeScreen extends Component {
    render() {
        const {onButtonClick} = this.props;

        return (
            <div className="welcomeScreenContainer">
                <h1 className="title">
                    Highway to hell
                </h1>
                <div className="content">
                    {/*<img src={ image } />*/}
                </div>
                <div className="info">
                    <p>
                        Are you afraid of tomorrow? Don't know what next year bring? Now it's not a problem due to our
                        amazing app, you can stay reassured, because we will keep you updated all the time what's going
                        to happen. Whether it'll be financial, ecological or political catastrophy, our tiny, cute racing
                        cars presenting changing world condition will provide you solid, up-to-date informations.
                    </p>
                    <button onClick={ onButtonClick }>Check it</button>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(WelcomeScreen);