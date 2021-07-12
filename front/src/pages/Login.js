import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";


const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const login = () => {
    dispatch(userActions.loginDB(id, pwd))
  }




  return (
    <React.Fragment>
      로그인페이지<br/>
      <input onChange={(e) => {setId(e.target.value)}}></input><br/>
      <input onChange={(e) => {setPwd(e.target.value)}}></input><br/>
      <button onClick={login}>로그인</button>
    </React.Fragment>
  );
};

export default Login;
