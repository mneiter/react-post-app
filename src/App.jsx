import React, { useEffect, useState } from 'react';
import PostService from './api/PostService';
import PostFilter from './components/Post/PostFilter';
import PostForm from './components/Post/PostForm';
import PostList from './components/Post/PostList';
import MyButton from './components/UI/button/MyButton';
import MyLoader from './components/UI/loader/MyLoader';
import MyModal from './components/UI/modal/MyModal';
import useFetching from './hooks/useFetching';
import usePosts from './hooks/usePosts';
import { getPageCount } from './utils/pages';

import './styles/App.css';
import { usePagination } from './hooks/usePagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(10);
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];

    setTotalPages(getPageCount(totalCount, limit));
  });
  const pagesArray = usePagination(totalPages);

  useEffect(() => {
    fetchPosts();
  }, []);

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
        Create Post
      </MyButton>
      <MyModal visible={isModalVisible} setVisible={setIsModalVisible}>
        <PostForm createPost={createPost} />
      </MyModal>
      <PostFilter filetr={filter} setFilter={setFilter} />
      <hr style={{ margin: '15px 0' }} />
      {
        postError
        && (
        <h1>
          Occure an error $
          {postError}
        </h1>
        )
      }
      {
        isPostLoading
          ? <div className="loader"><MyLoader /></div>
          : <PostList removePost={removePost} posts={sortedAndSearchedPosts} title="The list of posts" />
      }
      <div className="page__wrapper">
        {
          pagesArray.map((p) => (
            <span key={p} onClick={() => setPage()} className={p === page ? 'page page__current' : 'page'}>
              {p}
            </span>
          ))
        }
      </div>
    </div>
  );
}
export default App;
