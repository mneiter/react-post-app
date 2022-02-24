import React, { useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PostFilter from './components/Post/PostFilter';
import PostForm from './components/Post/PostForm';
import PostList from './components/Post/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState(
    [
      { id: uuidv4(), title: 'Javascript', body: 'text text text text text' },
      { id: uuidv4(), title: 'C#', body: 'text text text text text' },
      { id: uuidv4(), title: 'Java', body: 'text text text text text' },
      { id: uuidv4(), title: 'F#', body: 'text text text text text' },
      { id: uuidv4(), title: 'Payton', body: 'text text text text text' },
    ],
  );

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const sorteadPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  // eslint-disable-next-line max-len
  const sortedAndSearchedPosts = useMemo(() => sorteadPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase())), [filter.query, sorteadPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setIsModalVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setIsModalVisible(true)}>
        Create post
      </MyButton>
      <MyModal visible={isModalVisible} setVisible={setIsModalVisible}>
        <PostForm createPost={createPost} />
      </MyModal>
      <PostFilter filetr={filter} setFilter={setFilter} />
      <hr style={{ margin: '15px 0' }} />
      <PostList removePost={removePost} posts={sortedAndSearchedPosts} title="The list of posts" />
    </div>
  );
}
export default App;
