import React from "react";
import { ReactComponent as StarIcon } from "./star.svg";
import "./styles.css";

const PostItem = (props) => {
  const className = props.isFavorite ? "checked" : "";

  return (
    <li key={props.id}>
      <div className="post-section">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
      <StarIcon
        className={"move-to-favorites " + className}
        onClick={props.moveToFavorites}
      />
    </li>
  );
};

export default PostItem;
