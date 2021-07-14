import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Text, Image, Grid } from "../elements";
import { Wrapper } from "../elements";
import io from "socket.io-client";
import jwt_decode from "jwt-decode";

const UserList = (props) => {
  const token = sessionStorage.getItem("MY_SESSION");
  const decoded = jwt_decode(token);
  const nickname = decoded.nickname;
  const [currentOn, setCurrentOn] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:3000");
    socketRef.current.emit("join", { nickname });
    socketRef.current.on("currentOn", (currentOn) => {
      console.log(currentOn);
      console.log({ currentOn });
      setCurrentOn([[currentOn]]);
    });
    return () => socketRef.current.disconnect();
  }, []);

  const showCurrentOn = (props) => {
    if (!currentOn.length) {
      return <div>로딩 중...</div>;
    }
    return currentOn.map((current, index) => (
      <div key={index}>
        <h3>
          <span>
            {current}
            {current.nickname}
          </span>
          <br></br>
        </h3>
      </div>
    ));
  };
  const emptyspace = () => {
    return (null);
  };
  return (
    <div className="card">
    {emptyspace()}
      <div className="render-chat">
        {showCurrentOn()}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Container>
        <ChattingMode>Users</ChattingMode>
        <UserWrap>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
          <Wrapper>
            <Grid is_flex>
              <Grid is_flex left>
                <Image shape="circle" />
                <Text>오늘은 코딩왕</Text>
              </Grid>
              <Grid width="0%"></Grid>
            </Grid>
          </Wrapper>
        </UserWrap>
      </Container>
    </React.Fragment>
  );
};

// 채팅바 전체 레이아웃
const Container = styled.div`
  border: 3px solid #f7f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 100%;
  box-sizing: border-box;
`;

// 채팅바 상단
const ChattingMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 10%;
  box-sizing: border-box;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  background-color: #ffffff;
`;

// 채팅바 내용 레이아웃
const UserWrap = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px 30px 60px;
  overflow-x: hidden;
  overflow-y: auto;
`;

// 채팅 입력창
const ChattingInput = styled.input`
  background-color: #ffffff;
  border: none;
  width: 90%;
  margin-left: 10px;
  padding: 12px 4px;
  box-sizing: border-box;
  font-size: 18px;
`;

export default UserList;
