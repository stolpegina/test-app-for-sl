import types from "./types";

export const fetchDataSuccess = (posts) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    posts,
  };
};

export const fetchDataFailure = (errorMessage) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    errorMessage,
  };
};

export const postsfetchData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((posts) => dispatch(fetchDataSuccess(posts)))
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
};

export const addPost = (post) => {
  return {
    type: types.ADD_POST,
    title: post.title,
    body: post.body,
  };
};

export const moveToFavorites = (id) => {
  return {
    type: types.MOVE_TO_FAVORITES,
    id,
  };
};
