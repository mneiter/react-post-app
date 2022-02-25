import React, { useEffect, useState } from 'react';
import PostService from './api/PostService';
import PostFilter from './components/Post/PostFilter';
import PostForm from './components/Post/PostForm';
import PostList from './components/Post/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';
import usePosts from './hooks/usePosts';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setIsModalVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  async function fetchPosts() {
    const postsFromService = await PostService.getAll();
    setPosts(postsFromService);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setIsModalVisible(true)}>
        Create Post
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
