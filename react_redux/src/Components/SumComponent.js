import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getSum } from "../redux/sum/sumActions";

function SumComponent(props) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <input type="text" onChange={(e) => setA(e.target.value)}></input>
      <input type="text" onChange={(e) => setB(e.target.value)}></input>
      <h1>Sum is : {Number(props.a) + Number(props.b)}</h1>
      <button onClick={(e) => props.sum(a, b)}>Get Sum</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    a: state.sumReducer.a,
    b: state.sumReducer.b,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    sum: (valA, valB) => dispatch(getSum({ a: valA, b: valB })),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(SumComponent);
