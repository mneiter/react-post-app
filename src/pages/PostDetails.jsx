import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../api/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import useFetching from '../hooks/useFetching';

function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState({});

  const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);

  return (
    <div>
      <h1>
        You opened a message number =
        {' '}
        {params.id}
      </h1>
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
            ? <MyLoader />
            : (
              <div>
                {post.id}
                .
                {' '}
                {post.title}
              </div>
            )

      }
    </div>
  );
}

export default PostDetails;
