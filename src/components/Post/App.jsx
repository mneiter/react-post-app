import React, { useState } from 'react';
import PostList from './components/Post/PostList';

import './styles/App.css';

function App() {
  const [firstposts, setFirstPosts] = useState({
    titel: "The first post's list", 
    posts: [
      {id: 1, title: 'Javascript', body: 'text text text text text'},
      {id: 2, title: 'C#', body: 'text text text text text'},
      {id: 3, title: 'Java', body: 'text text text text text'},
      {id: 4, title: 'F#', body: 'text text text text text'},
      {id: 5, title: 'Payton', body: 'text text text text text'}
  ]});

  const [secondposts, setSecondPosts] = useState({
    titel: "The second post's list", 
    posts: [
      {id: 1, title: 'Javascript', body: 'text text text text text'},
      {id: 2, title: 'C#', body: 'text text text text text'},
      {id: 3, title: 'Java', body: 'text text text text text'},
      {id: 4, title: 'F#', body: 'text text text text text'},
      {id: 5, title: 'Payton', body: 'text text text text text'}
  ]});

  return (
    <div className="App">      
      <PostList posts={firstposts.posts} title={firstposts.titel} />
      <PostList posts={secondposts.posts} title={secondposts.titel} />
    </div>
  );
}
export default App;
