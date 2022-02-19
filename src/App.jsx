import React, { useState, useRef } from 'react';
import PostList from './components/Post/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState(
    [
      {id: 1, title: 'Javascript', body: 'text text text text text'},
      {id: 2, title: 'C#', body: 'text text text text text'},
      {id: 3, title: 'Java', body: 'text text text text text'},
      {id: 4, title: 'F#', body: 'text text text text text'},
      {id: 5, title: 'Payton', body: 'text text text text text'}
    ]);

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, {...post, id: posts.length + 1}]);
    setPost({title: '', body: ''});
  }

  return (
    <div className="App">
      <form>
        <MyInput value={post.title}
                  onChange={e => setPost({...post, title: e.target.value})}
                  type="text"
                  placeholder="Post title"></MyInput>
        <MyInput value={post.body}
                  onChange={e => setPost({...post, body: e.target.value})}
                  type="text"
                  placeholder="Post description"></MyInput>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="The list of posts" />
    </div>
  );
}
export default App;
