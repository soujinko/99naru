import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user })); //회원가입 시 ?

const initialState = {
  nick_name: 'sungsu',
};

const loginDB = (id, pwd) => {
  return function (dispatch, getState, {history}) {
    axios
    .post("http://localhost:3000/api/signin", {
      loginId: id,
      password: pwd,
    })
    .then((res) => {
      sessionStorage.setItem("MY_SESSION", res.data.token);
      dispatch(setUser(id))
      // history.push("/main/home");
      window.location.href = "/main/home";
    });
  }
};

const signupDB = (id, pwd, nickname) => {
    return function (dispatch, getState, {history}) {
      axios
      .post("http://localhost:3000/api/signup", {
        loginId: id,
        password: pwd,
        nickname: nickname,
      })
      .then((res) => {
        dispatch(loginDB(id,pwd))
      });
    }
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user_id = action.payload.user;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        sessionStorage.removeItem("MY_SESSION");
      // window.location.reload()
      window.location.href = "/signin"
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  logOut,
  getUser,
  signupDB,
  loginDB,
};

export { actionCreators };
