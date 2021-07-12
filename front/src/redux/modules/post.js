import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const ADD_POST = "GET_POST";
const SET_POST = "SET_POST";
const MODIFY_POST = "MODIFY_POST";

const addPost = createAction(ADD_POST, (post) => ({ post }));
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const modifyPost = createAction(MODIFY_POST, (post_list) => ({ post_list })); //회원가입 시 ?

const initialState = {
  list: [],
};

const initialPost = {

}

const getpostDB = () => {
  return function (dispatch, getState, {history}) {
    axios
    .get('http://localhost:3000/api/posts',
  ).then((response) => {
    // console.log(response.data)
    dispatch(setPost(response.data))
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
};

const setpostDB = (id, pwd, user_name) => {

};

const modifypostDB = (id, pwd) => {

};

export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
      }),
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [MODIFY_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  addPost,
  setPost,
  modifyPost,
  getpostDB,
  setpostDB,
  modifypostDB,
};

export { actionCreators };
