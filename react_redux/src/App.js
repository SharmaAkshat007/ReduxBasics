import React from "react";
import CounterComponent from "./Components/CounterComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import SumComponent from "./Components/SumComponent";
import UserComponent from "./Components/UserComponent";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterComponent />
        <CounterComponent two />
        <SumComponent />
        <UserComponent />
      </div>
    </Provider>
  );
}

export default App;
