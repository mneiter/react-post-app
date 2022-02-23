import React, { useState, useRef, useMemo } from 'react';
import {v4 as uuidv4} from 'uuid'
import PostFilter from './components/Post/PostFilter';
import PostForm from './components/Post/PostForm';
import PostList from './components/Post/PostList';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState(
    [
      {id: uuidv4(), title: 'Javascript', body: 'text text text text text'},
      {id: uuidv4(), title: 'C#', body: 'text text text text text'},
      {id: uuidv4(), title: 'Java', body: 'text text text text text'},
      {id: uuidv4(), title: 'F#', body: 'text text text text text'},
      {id: uuidv4(), title: 'Payton', body: 'text text text text text'}
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})

  const sorteadPosts = useMemo(() => {
    if(filter.sort)
    {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sorteadPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sorteadPosts])

  const createPost = newPost => {      
    setPosts([...posts, newPost]);
  }

  const removePost = post => {         
    setPosts(posts.filter(p => p.id != post.id));
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />   
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filetr={filter} setFilter={setFilter} />
      <PostList removePost={removePost} posts={sortedAndSearchedPosts} title="The list of posts" />
    </div>
  );
}
export default App;
