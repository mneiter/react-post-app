import React, { Component } from 'react'
import PostItem from './PostItem';

const PostList = (props) => {
    return (
        <div className='postList'>
          <h1 style={{textAlign: 'center'}}>{props.title}</h1>
          {props.posts.map((post, index) => <
              PostItem number={index+1} post={post} key={post.id} />)}
        </div>
    )
}


export default PostList