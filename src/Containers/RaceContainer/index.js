import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getAllRelative } from "../../Redux/cars/actions";
import Lane from "../../Components/Lane";

import "./styles/default.scss";
import { limo, tank, bio, f1 } from "./styles/cars";
import flag from '../../Components/Lane/styles/images/flag.png';

const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const namesList = [
    {
        name: 'political',
        texture: limo,
    },{
        name: 'biological',
        texture: bio,
    },{
        name: 'economical',
        texture: f1,
    },{
        name: 'war',
        texture: tank,
    },
];

const getTextureByName = (name) => {
    let txt = '';
    namesList.forEach(e => {
        if(e.name === name) {
            txt = e.texture;
        }
    });

    return txt;
};

const parseCar = car => ({
    position: car.pointsPercentage*600-50,
    name: car.name,
    color: generateRandomColor(),
    texture: getTextureByName(car.name),
});

const mapStateToProps = state => ({
    cars: state.cars.cars,
});

const mapDispatchToProps = dispatch => ({
    getCarsInfo: () => dispatch(getAllRelative()),
});

class RaceContainer extends Component {
    componentDidMount() {
        const {getCarsInfo} = this.props;

        getCarsInfo();
        setInterval(getCarsInfo, 10000);
    }

    render() {
        const { cars } = this.props;
        return (
            <div className="raceContainer">
                {cars.map(singleCar => {
                    const car = parseCar(singleCar);
                    return (
                        <Lane
                            key={ car.color }
                            carTexture={ car.texture }
                            carColor={ car.color }
                            carName={ car.name }
                            carPosition={ `${car.position}px` }
                        />)
                })}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceContainer);