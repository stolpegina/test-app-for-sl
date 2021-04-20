import React from 'react';

const PostItem = (props) => {
    const className = props.isFavorite ? 'checked' : '';
    console.log(props);

    return (
        <li key={props.id}> 
            <div className="post-section">
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
            <button className={"move-to-favorites " + className} onClick={props.moveToFavorites}></button>
        </li>
    )
}

export default PostItem;