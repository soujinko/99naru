import React from "react";
import styled from "styled-components";
// import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import { Wrapper, Text, Button, Image } from "../elements";

const ProfileHome = (props) => {
  return (
    <React.Fragment>
      <MainWrap>
        <Header>Profile</Header>
        <Container>
          <InnerWrapper>
            <Wrapper>
              <Image circle size="400"></Image>
            </Wrapper>
            <Wrapper width="50%">
              <Line>
                <Text>이름</Text>
                <div className="under">
                  <Input />
                </div>
              </Line>
            </Wrapper>
            <Wrapper margin="0.5rem 0" width="50%">
              <Button>저장</Button>
            </Wrapper>
            <Wrapper margin="0.5rem 0" width="50%">
              <Button>취소</Button>
            </Wrapper>
          </InnerWrapper>
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
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  box-sizing: border-box;
  padding-top: 40px;
  background-color: #ffffff;
  margin-bottom: 20px;
`;

const Line = styled.div`
  margin: 1rem;
  width: 100%;
  & .under {
    width: 100%;
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: 5px dashed #f7f9f9;

    &:hover {
      & .icon {
        background-color: ${(props) => props.theme.main_color};
        color: ${(props) => props.theme.theme_gray};
      }
    }
    & .icon {
      color: gray;
      cursor: pointer;
      transition: 0.2s;
      border-radius: 50%;
      padding: 2px;
    }
  }
`;

const Input = styled.input`
  border: none;
  background-color: #ffffff;
  width: 100%;
  font-size: 20px;
  cursor: pointer;
  :focus {
    outline-color: #f7f9f9;
  }
`;

export default ProfileHome;
