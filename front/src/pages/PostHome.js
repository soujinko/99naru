import React from "react";
import styled from "styled-components";
import PostWrite from "../components/PostWrite";
import PostList from "../components/PostList";
import Header from "../components/Header";
import Posts from "../components/Posts"

const PostHome = (props) => {
  return (
    <React.Fragment>
      <MainWrap>
        <Header>Home</Header>
        <Container>
          <PostWrite />
          <Posts />
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
