import React from "react";
import styled from "styled-components";
import { Grid, Input, Button } from "../elements";
import axios from 'axios';
import {useSelector, useDispatch} from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const [comments,setComments] = React.useState("");

  const addComment = () => {
    if (comments === "") {
        window.alert("채워주세요!")
        return;
    } 
    console.log(comments)
    console.log(props.list._id)
    axios
    .post("http://localhost:3000/api/comments", {
      // postId: `${postId}`,
      // text: `${comments}`,
    },{headers : {'Authorization': `Bearer ${sessionStorage.getItem("MY_SESSION")}`}})
    .then((res) => {
      console.log(res)
    });
    dispatch(postActions.getpostDB());
    window.location.reload()
}

  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input onChange={(e) => {setComments(e.target.value)}} placeholder="댓글 내용을 입력해주세요" />
        <Button type="text" width="100px" margin="0px 2px 0px 2px">
          작성하기
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
