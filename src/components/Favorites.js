import React from 'react';
import PostItem from './PostItem';

const Favorites = (props) =>{
    const favorites = props.posts.filter((post) => post.isFavorite === true);
    
    return(
        <ol>
            {favorites.map((post) => (
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

export default Favorites;