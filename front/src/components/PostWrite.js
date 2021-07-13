import React from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button, Input } from "../elements";

const PostWrite = (props) => {
  return (
    <React.Fragment>
      <WriteForm>
        <Grid is_flex padding="16px">
          <Grid width="20%" padding="16px">
            <Image circle size="70"></Image>
            <div>사용자 닉네임</div>
          </Grid>
          <Grid width="80%">
            <Input multiLine />
          </Grid>
        </Grid>
        <Grid right padding="0px 16px 16px 0px">
          <Button width="100px" margin="0px 2px 0px 2px">
            작성하기
          </Button>
        </Grid>
      </WriteForm>
    </React.Fragment>
  );
};

const WriteForm = styled.div`
  box-sizing: border-box;
  border: 1px solid #f7f9f9;
  background-color: #ffffff;
  margin-bottom: 20px;
`;

export default PostWrite;
