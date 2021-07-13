import React from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button, Input } from "../elements";
import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";

import {
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipsesSharp,
  IoThumbsUpOutline,
  IoThumbsUpSharp,
  IoTrash,
  IoSettingsOutline,
} from "react-icons/io5";

const PostList = (props) => {
  return (
    <React.Fragment>
      <PostView>
        <Grid is_flex padding="16px 16px 0px 16px" width="100%">
          <Grid is_flex width="100%" left>
            <Image shape="circle" src={props.src} />
            <Text bold>사용자 닉네임</Text>
          </Grid>
          <Grid is_flex width="100%">
            <Grid is_flex width="100%">
              <Grid right>
                <Text>작성 시간</Text>
              </Grid>
              <Grid is_flex width="100" left padding="0px 10px">
                <IconWrap>
                  <IoSettingsOutline />
                </IconWrap>
                <IconWrap>
                  <IoTrash />
                </IconWrap>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid padding="16px" is_flex>
          {/* <Grid width="10%"></Grid> */}
          <Grid width="100%" bg="#F7F9F9" padding="8px">
            <Text padding="5px 10px" size="18px">
              작성한 글 내용입니다.
            </Text>
          </Grid>
        </Grid>
        <Grid is_flex padding="0px 26px" width="100%">
          <Grid is_flex width="100%" left>
            <Grid>
              <IconThumbWrap>
                <IconClickSpan>
                  <IoThumbsUpOutline />
                </IconClickSpan>
              </IconThumbWrap>
            </Grid>
            {/* <Grid>
              <LikeNumber>1</LikeNumber>
            </Grid> */}
          </Grid>
          <IconWrap>
            <IconClickSpan>
              <IoChatbubbleEllipsesSharp />
            </IconClickSpan>
          </IconWrap>
        </Grid>
        <Grid>
          <CommentWrite></CommentWrite>
          <CommentList></CommentList>
          <CommentList></CommentList>
          <CommentList></CommentList>
        </Grid>
      </PostView>
    </React.Fragment>
  );
};

const PostView = styled.div`
  box-sizing: border-box;
  border: 1px solid #f7f9f9;
  background-color: #ffffff;
  margin-bottom: 10px;
`;

const IconWrap = styled.div`
  width: 100%;
  /* padding: 0px 0rem; */
  /* margin: 2rem 0px; */
  text-align: right;
  font-size: 2rem;
  color: #1da1f2;
`;

const IconThumbWrap = styled.div`
  width: 100%;
  /* padding: 0px 0rem; */
  /* margin: 2rem 0px; */
  text-align: left;
  font-size: 2rem;
  color: #1da1f2;
`;

const LikeNumber = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const IconClickSpan = styled.span`
  cursor: pointer;
`;

export default PostList;
