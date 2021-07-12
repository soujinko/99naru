import React from "react";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [nickname, setNickName] = React.useState("");

  const signup = () => {
    if (id==="" || pwd==="" || pwd_check==="" || nickname==="") {
      window.alert("전부 채워주세요!");
      return;
    }
    if (pwd !== pwd_check) {
      window.alert("비밀번호가 일치하지 않습니다!");
      return;
    }
    if (id.length < 3) {
      window.alert("아이디 최소 3글자")
      return;
    }
    if (pwd.length < 6) {
      window.alert("비밀번호 최소 6글자")
      return;
    }
    if (nickname.length < 3) {
      window.alert("닉네임 최소 3글자")
      return;
    }
    console.log(id, pwd, nickname)
    dispatch(userActions.signupDB(id, pwd, nickname))
  };



  return (
    <React.Fragment>
      아이디:<input onChange={(e) => {setId(e.target.value)}}></input><br/>
      닉네임:<input onChange={(e) => {setNickName(e.target.value)}}></input><br/>
      비밀번:<input onChange={(e) => {setPwd(e.target.value)}}></input><br/>
      비번확:<input onChange={(e) => {setPwdCheck(e.target.value)}}></input><br/>
      <button onClick={signup}>회원가입</button>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
