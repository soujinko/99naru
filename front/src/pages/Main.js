import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";
import PostList from "../components/PostList";
import axios from "axios";

const Main = () => {
  const token = sessionStorage.getItem("MY_SESSION");
  if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem("MY_SESSION")}`;
  } else {
    axios.defaults.headers.common['Authorization'] = null;
  }
  const dispatch = useDispatch();
    const [addpost, setaddPost] = React.useState("");
    const post_list = useSelector((state) => state.post.list);
    const is_session = sessionStorage.getItem("MY_SESSION") ? true : false;
    const user_nick = useSelector((state) => state.user.nick_name)
    const go_login = () => {
      window.location.href = "/login"
    }
    const logout = () => {
      dispatch(userActions.logOut())
      window.location.href = "/login"
    }
    const addPost = () => {
      if(addpost===""){
        window.alert("입력해주세요!")
        return;
      }
      axios
      .post("http://localhost:3000/api/posts", 
      {text: `${addpost}`,},
      {headers : {'Authorization': `Bearer ${sessionStorage.getItem("MY_SESSION")}`}}
      )
      .then((res) => {
        console.log(res)
      });
      window.location.reload()
    }
    React.useEffect(() => {
      dispatch(postActions.getpostDB());
    }, [])


    if(is_session){
      return (
        <React.Fragment>
          <h1>메인 페이지</h1>
          <h5>{user_nick}님</h5>
          <input type='text' onChange={(e) => {setaddPost(e.target.value)}}></input>
          <button onClick={addPost}>입력</button>
          {is_session ? <button onClick={logout}>로그아웃</button> : <button onClick={go_login}>로그인하러가자</button>}
            
            {post_list.map((p, idx, a) => {
              return <PostList key={p._id} list = {p} is_modify={false}/>
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
