import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onDecrement, onIncrement } from '../actions/counterActions';

class CounterComponent extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2>Counter: {this.props.count}</h2>
                </div>
                <div>
                    <button onClick={this.props.increment}>+</button>
                    <button onClick={this.props.decrement}>-</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { count: state.count }
};
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(onIncrement()),
        decrement: () => dispatch(onDecrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)