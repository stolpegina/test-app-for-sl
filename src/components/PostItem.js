import React from 'react';

const PostItem = (props) => {
    return (
        <li>
            <div>{props.id}</div>
            <div>{props.userId}</div>
            <div>{props.title}</div>
            <div>{props.body}</div>
            <button onClick={props.moveToFavorites}>Move To Favorites</button>
        </li>
    )
}

export default PostItem;