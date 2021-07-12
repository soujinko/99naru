import "./App.css";
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Login, Signup, Profile, Main } from "../pages";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

function App() {


  return (
    <React.Fragment>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/user/:id" exact component={Profile} />
        </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
