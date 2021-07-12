import React from 'react';
import styled from 'styled-components';

const PostList = (props) => {
    const text = props.list.text
    const comments = props.list.comments

    // axios
    // .delete("http://localhost:3000/api/posts/60ea75f75ce9445a1e91392d", {
    //     text: '수정수정',
    // })
    // .then((res) => {
    // });


    if (comments.length !== 0) {
        return(
            <React.Fragment>
            <Post1>
                {text}
                {comments.map((p) => {
                    return <div key={p._id}>{p.text}</div>
                })}
                <input type='text'></input>
                <button>입력</button>
            </Post1>
        </React.Fragment>
        )
    } 

    return(
        
        <React.Fragment>
            <Post1>
                {text}
                <input type='text'></input>
                <button>입력</button>
            </Post1>
        </React.Fragment>
    )

}

export default PostList;

const Post1 = styled.div`
    background-color : #eee;
    width : 200px;
    height : 150px;
    margin : 10px;
`;