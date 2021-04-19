import React from 'react';
import PostItem from './PostItem';

const Posts = (props) =>{
    return (
        <ol>
        {props.posts.map((post) => (
          <PostItem
            key={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
            moveToFavorites={() => props.moveToFavorites(post.id)}
          />
        ))}
      </ol>
    )
}

export default Posts;