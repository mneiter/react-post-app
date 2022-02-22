import React, { useState, useRef, useMemo } from 'react';
import {v4 as uuidv4} from 'uuid'
import PostForm from './components/Post/PostForm';
import PostList from './components/Post/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';

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

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  
  const sorteadPosts = useMemo(() => {
    if(selectedSort)
    {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sorteadPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sorteadPosts])

  const createPost = newPost => {      
    setPosts([...posts, newPost]);
  }

  const removePost = post => {         
    setPosts(posts.filter(p => p.id != post.id));
  }

  const sortPosts = (sortValue) =>{      
    setSelectedSort(sortValue);      
  }

  return (
    <div className="App">
      <PostForm createPost={createPost} />   
      <hr style={{margin: '15px 0'}}/>
      <MySelect
        value={selectedSort}
        onChange={sortValue => sortPosts(sortValue)}
        defaultValue="Oredr By"
        options = {[{name: 'Title', value: 'title'},
                    {name: 'Description', value: 'body'}]}>
      </MySelect>
      <MyInput value={searchQuery} placeholder="search ..." onChange={e => setSearchQuery(e.target.value)} />

      {
        sortedAndSearchedPosts.length
          ? <PostList removePost={removePost} posts={sortedAndSearchedPosts} title="The list of posts" />
          : <h1 style={{textAlign: 'center'}}>Items not found</h1>
      }
    </div>
  );
}
export default App;
