import React from "react";
import styled from "styled-components";
import { Grid, Input, Button } from "../elements";

const CommentWrite = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input placeholder="댓글 내용을 입력해주세요" />
        <Button type="text" width="100px" margin="0px 2px 0px 2px">
          작성하기
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
