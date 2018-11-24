import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getAllRelative } from "../../Redux/cars/actions";
import Lane from "../../Components/Lane";

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
    }

    render() {
        const { cars } = this.props;
        console.log(cars);
        return (
            <div>
                {cars.map(car => (<Lane key={ car.color } carColor={ car.color } carPosition={ `${car.position}vw` }/>))}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RaceContainer);