export const fetchDataSuccess = (posts) => {
  return{
    type: "FETCH_DATA_SUCCESS",
    posts
  }
}

export const postsfetchData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response;
      })
      .then(response => response.json())
      .then(posts => dispatch(fetchDataSuccess(posts)))
  }
}

export const addPost = (post) => {
    return {
      type: "ADD_POST",
      title: post.title,
      body: post.body,
    };
  };
  
  export const moveToFavorites = (id) => {
    return {
      type: "MOVE_TO_FAVORITES",
      id,
    };
  };
  