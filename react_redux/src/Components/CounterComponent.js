import React from "react";
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../redux/counter/counterAction";

function CounterComponent(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter : {props.countState}</h1>
      <button onClick={props.increamentCounter}>IncreaseCounter</button>
      <button onClick={props.decreamentCounter}>DecreaseCounter</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countState: state.countReducer.count,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  let val = 1;
  props.two ? (val = 2) : (val = 1);
  return {
    increamentCounter: () => dispatch(increaseCounter(val)),
    decreamentCounter: () => dispatch(decreaseCounter(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
