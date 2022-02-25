import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

function PostForm({ createPost }) {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = { ...post, id: uuidv4() };

    createPost(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post title"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
}

export default PostForm;
