import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addNumber1} from "./redux/actions/actions";

class Counter extends Component {
    render() {
        return (
            <div style={{padding: 20, border: `1px solid #ccc`}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <button onClick={() => this.props.addNumber(10)}>Add</button>
                <button onClick={() => this.props.addNumber(-10)}>Sub</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter2.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: number => {
            dispatch(addNumber1(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
