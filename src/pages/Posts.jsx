// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import PostService from '../api/PostService';
import PostFilter from '../components/Post/PostFilter';
import PostForm from '../components/Post/PostForm';
import PostList from '../components/Post/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyLoader from '../components/UI/loader/MyLoader';
import MyModal from '../components/UI/modal/MyModal';
import useFetching from '../hooks/useFetching';
import usePosts from '../hooks/usePosts';
import { getPageCount } from '../utils/pages';

import '../styles/App.css';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-shadow
  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const lastElement = useRef();
  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    window.scrollTo(0, 0);
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

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
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="number of items per page"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: 50, name: '50' },
          { value: -1, name: 'All' },
        ]}
      />
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
          && <div className="loader"><MyLoader /></div>
      }
      <PostList removePost={removePost} posts={sortedAndSearchedPosts} title="The list of posts" />
      <div ref={lastElement} style={{ height: 2, background: 'red' }} />
      {
        posts.length < 100
          ? <h1>Load data</h1>
          : <h1>Data is loaded</h1>
      }
    </div>
  );
}
export default Posts;
