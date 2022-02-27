import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../UI/button/MyButton';

function PostItem(props) {
  const navigate = useNavigate();

  const redirectToPost = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}
          .
          {' '}
          {props.post.title}
        </strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => redirectToPost(props.post.id)} type="button">Open</MyButton>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)} type="button">Delete</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
