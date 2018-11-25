import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getAllRelative } from "../../Redux/cars/actions";
import Lane from "../../Components/Lane";

import "./styles/default.scss";

const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const parseCar = car => ({
    position: car.pointsPercentage*600-100,
    name: car.name,
    color: generateRandomColor(),

});

const mapStateToProps = state => ({
    cars: state.cars.cars,
    // cars: [{
    //     name: '1',
    //     pointPercentege: 0.1,
    // },{
    //     name: '1',
    //     pointPercentege: 0.3,
    // },{
    //     name: '1',
    //     pointPercentege: 0.5,
    // },{
    //     name: '1',
    //     pointPercentege: 1,
    // },{
    //     name: '1',
    //     pointPercentege: 1,
    // },{
    //     name: '1',
    //     pointPercentege: 1,
    // },{
    //     name: '1',
    //     pointPercentege: 1,
    // },{
    //     name: '1',
    //     pointPercentege: 1,
    // }],
});

const mapDispatchToProps = dispatch => ({
    getCarsInfo: () => dispatch(getAllRelative()),
});

class RaceContainer extends Component {
    componentDidMount() {
        const {getCarsInfo} = this.props;

        getCarsInfo();
        // setInterval(getCarsInfo, 1000);
    }

    render() {
        const { cars } = this.props;
        return (
            <div className="raceContainer">
                {cars.map(singleCar => {
                    const car = parseCar(singleCar);
                    return (<Lane key={ car.color } carColor={ car.color } carName={ car.name } carPosition={ `${car.position}px` } />)
                })}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceContainer);