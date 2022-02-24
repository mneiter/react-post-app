import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PostItem from './PostItem';

function PostList({ posts, title, removePost }) {
  if (!posts.length) {
    return (<h1 style={{ textAlign: 'center' }}>Items not found</h1>);
  }

  return (
    <div className="postList">
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={removePost}
          post={post}
          key={uuidv4()}
          number={index + 1}
        />
      ))}
    </div>
  );
}

export default PostList;
