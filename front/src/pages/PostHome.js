import React from "react";
import styled from "styled-components";
import PostWrite from "../components/PostWrite";
import PostList from "../components/PostList";
import Header from "../components/Header";
import Posts from "../components/Posts"

import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";


const PostHome = (props) => {
  const token = sessionStorage.getItem("MY_SESSION");
  const is_session = sessionStorage.getItem("MY_SESSION") ? true : false;
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list)
  const parseJwt = () => {
    try {
      return JSON.parse(atob(`${sessionStorage.getItem("MY_SESSION")}`.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
  const nickname = parseJwt().nickname
  const user_id = parseJwt().userId
  console.log(parseJwt())
  console.log(nickname)
  console.log(user_id)
  if (post_list===undefined){
    return;
  }
  if (!is_session){
    window.location.href = "/"
    return;
  }
  return (
    <React.Fragment>
      <MainWrap>
        <Header>Home</Header>
        <Container>
          <PostWrite />
          {post_list.length !== 0 ? post_list.map((p) => {
            return <Posts nickname={nickname} key={p._id} props={p}/>
          }) : []}
        </Container>
      </MainWrap>
    </React.Fragment>
  );
};

const MainWrap = styled.div`
  border: 1px solid #f7f9f9;
  background-color: #ffffff;
  width: 80%;
  /* height: 100vh; */
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 2px solid #f7f9f9;
  background-color: #f7f9f9;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default PostHome;
