import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import PostItem from './PostItem';

const PostList = props => {

    return (
        <div className='postList'>
          <h1 style={{textAlign: 'center'}}>{props.title}</h1>
          {props.posts.map((post, index) => <
              PostItem remove={props.removePost} post={post} key={uuidv4()} number={index + 1} />)}
        </div>
    )
}

export default PostList