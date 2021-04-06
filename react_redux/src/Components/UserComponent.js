import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersCall } from "../redux/async/userReducer";

function UserComponent(props) {
  const { loading, users, error } = props.reqState;
  const fetchUsers = props.fetchUsers;

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        users.map((user) => <h1 key={user.id}>{user.name}</h1>)
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reqState: state.userReducer,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    fetchUsers: () => dispatch(getUsersCall()),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(UserComponent);
