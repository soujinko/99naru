import "./App.css";
import React from "react";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import { Login, Signup, Main } from "../pages";

import { Grid, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { Route } from "react-router-dom";


function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
  }, []);

  return (
    <React.Fragment>
      <Grid>
        {/* connectedrouter로 리덕스와 컴포넌트를 묶어줄거예요. 여기 들어가는 history는 우리가 만든 커스텀 history예요. */}
        <ConnectedRouter history={history}>
          {/* 아직 목록 페이지가 없으니, 루트 경로(/)는 Login을 엮어줄게요! */}
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </ConnectedRouter>
      </Grid>
        <Button
          is_float
          _onClick={() => {
            history.push("/write");
          }}
        >
          +
        </Button>
    </React.Fragment>
  );
}

export default App;
