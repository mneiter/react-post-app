import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import PostItem from './PostItem';

function PostList({ posts, title, removePost }) {
  if (!posts.length) {
    return (<h1 style={{ textAlign: 'center' }}>Items not found</h1>);
  }

  return (
    <div className="postList">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={uuidv4()}
            timeout={500}
            classNames="post"
          >
            <PostItem
              remove={removePost}
              post={post}
              number={index + 1}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default PostList;
