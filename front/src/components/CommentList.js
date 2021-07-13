import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../elements";

import {
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipsesSharp,
  IoThumbsUpOutline,
  IoThumbsUpSharp,
  IoTrash,
  IoSettingsOutline,
} from "react-icons/io5";

const CommentList = (props) => {
  return (
    <Grid is_flex padding="0px 16px 0px 16px">
      <Grid center is_flex width="20%">
        <Image shape="circle" />
        <Text bold>오늘은 코딩왕</Text>
      </Grid>
      <Grid is_flex margin="0px 4px">
        <Grid width="70%">
          <Text margin="0px 0px 0px 5px">
            완전 유익한 정보네요!! 감사합니다~~~~~~~!
          </Text>
        </Grid>
        <Grid is_flex width="100%">
          <Grid right>
            <Text>작성 시간</Text>
          </Grid>
          <Grid is_flex width="100" padding="0px 10px">
            <IconWrap>
              <IoChatbubbleEllipsesOutline />
            </IconWrap>
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
  );
};

const IconWrap = styled.div`
  width: 100%;
  /* padding: 0px 0rem; */
  /* margin: 2rem 0px; */
  text-align: right;
  font-size: 2rem;
  color: #1da1f2;
  cursor: pointer;
`;

export default CommentList;
