import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {useSelector, useDispatch} from "react-redux";
import {actionCreators as postActions} from "../redux/modules/post";

const PostList = (props) => {
    const dispatch = useDispatch();
    const [addcomments, setComments] = React.useState("");
    const text = props.list.text
    const comments = props.list.comments
    const postId = props.list._id
    
    const addComment = () => {
        if (addcomments === "") {
            window.alert("채워주세요!")
            return;
        } 
        console.log(addcomments)
        console.log(props.list._id)
        axios
        .post("http://localhost:3000/api/comments", {
          postId: `${postId}`,
          text: `${addcomments}`,
        })
        .then((res) => {
          console.log(res)
        });
        dispatch(postActions.getpostDB());
        window.location.reload()
    }

    const deleteComment = () => {
        axios
        .delete(`http://localhost:3000/api/posts/${postId}`, {
        })
        .then((res) => {
          console.log(res)
        });
        dispatch(postActions.getpostDB());
        window.location.reload()
    }


    const modifyPost = () => {
        axios
        .put(`http://localhost:3000/api/posts/${postId}`, {
            text: "수정수정",
        })
        .then((res) => {
          console.log(res)
        });
        dispatch(postActions.getpostDB());
        // window.location.reload()
        console.log(props)
    }



    if (comments.length !== 0) {
        return(
            <React.Fragment>
            <Post1>
                <h1>{text}</h1>
                {}<input></input>
                <button onClick={modifyPost}>수정하러</button>
                <button onClick={deleteComment}>삭제</button><hr/>
                {comments.map((p) => {
                    return <div key={p._id}>{p.text}</div>
                })}
                <input type='text' onChange={(e) => {setComments(e.target.value)}}></input>
                <button onClick={addComment}>입력</button>
                <button>좋아요</button>
            </Post1>
        </React.Fragment>
        )
    } 

    return(
        
        <React.Fragment>
            <Post1>
                <h1>{text}</h1>
                <input></input>
                {/* <button onClick={modifyPost}>수정하러</button> */}
                <button onClick={deleteComment}>삭제</button><hr/>
                <input type='text' onChange={(e) => {setComments(e.target.value)}}></input>
                <button onClick={addComment}>입력</button>
                <button>좋아요</button>
            </Post1>
        </React.Fragment>
    )

}

export default PostList;

const Post1 = styled.div`
    background-color : #eee;
    width : 250px;
    height : 200px;
    margin : 10px;
`;