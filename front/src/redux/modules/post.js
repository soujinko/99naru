import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const ADD_POST = "GET_POST";
const SET_POST = "SET_POST";
const MODIFY_POST = "MODIFY_POST";
const DELETE_POST = "DELETE_POST";
const IS_MODIFY = "IS_MODIFY";

const addPost = createAction(ADD_POST, (post) => ({ post }));
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const modifyPost = createAction(MODIFY_POST, (post_list) => ({ post_list })); 
const deletePost = createAction(DELETE_POST, (post_list) => ({ post_list })); 
const is_modify = createAction(IS_MODIFY, (post_list) => ({ post_list })); 

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
    console.log(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
};

const setpostDB = (id, pwd, user_name) => {

};

const modifypostDB = (postId, text) => {
    
};

const deletePostDB = (postId) => {

};

export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
      }),
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        draft.is_modify = false;
      }),
    [MODIFY_POST]: (state, action) => produce(state, (draft) => {}),
    [IS_MODIFY]: (state, action) => 
    produce(state, (draft) => {
      draft.list = action.payload.post_list;
      draft.is_modify = true;
      console.log(action.payload.post_list)
    }),
  },
  
  initialState
);

const actionCreators = {
  addPost,
  setPost,
  modifyPost,
  is_modify,
  getpostDB,
  setpostDB,
  modifypostDB,
};

export { actionCreators };
