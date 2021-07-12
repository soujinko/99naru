import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";
import PostList from "../components/PostList";
import axios from "axios";

const Main = () => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    const is_session = sessionStorage.getItem("MY_SESSION") ? true : false;

    const go_login = () => {
      window.location.href = "/login"
    }
    const logout = () => {
      dispatch(userActions.logOut())
      window.location.href = "/login"
    }

    React.useEffect(() => {
      dispatch(postActions.getpostDB());
      axios
      .put("http://localhost:3000/api/posts/60e9d0a1a37c334a9cfc04b0", {
        text: '수정된 text',
      })
      .then((res) => {
        console.log(res)
      });
    }, [])
    


    if(is_session){
      return (
        <React.Fragment>
          <h1>메인 페이지</h1>
          {is_session ? <button onClick={logout}>로그아웃</button> : <button onClick={go_login}>로그인하러가자</button>}
          {/* <button onClick={}>로그인 상태</button> */}
            {post_list.map((p, idx, a) => {
              return <PostList key={p._id} list = {p} />
            })}
        </React.Fragment>
      );
    }

    return(
      <React.Fragment>
        <h1>로그인 후 이용해주세요!</h1>
        <button onClick={go_login}>로그인하러가자</button>
      </React.Fragment>
    )

};

export default Main;
