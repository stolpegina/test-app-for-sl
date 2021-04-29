import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Posts from "../components/Posts";
import Form from "../components/Form";

import {
  addPost,
  moveToFavorites,
  postsfetchData,
} from "../store/posts/actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData("https://jsonplaceholder.typicode.com/posts");
  }

  render() {
    return (
      <div className="App">
        <div className="all-posts">
          <h2>All</h2>
          <Posts
            posts={this.props.posts}
            moveToFavorites={this.props.moveToFavorites}
          />
        </div>
        <div className="favorites-posts">
          <h2>Favorites</h2>
          <Posts
            posts={this.props.posts.filter((post) => post.isFavorite)}
            moveToFavorites={this.props.moveToFavorites}
          />
          <Form addPost={this.props.addPost} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(postsfetchData(url)),
    addPost: (title, body) => dispatch(addPost(title, body)),
    moveToFavorites: (id) => dispatch(moveToFavorites(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
