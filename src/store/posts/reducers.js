import types from "./types";

const initialState = {
  data: [],
  errorMessage: "",
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_SUCCESS:
      return { ...state, data: action.posts };

    case types.FETCH_DATA_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    case types.ADD_POST: {
      const lastComment = state.data[state.data.length - 1];
      const lastCommentId = lastComment ? lastComment.id : 0;
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: lastCommentId + 1,
            title: action.title,
            body: action.body,
            userId: 1,
          },
        ],
      };
    }

    case types.MOVE_TO_FAVORITES:
      return {
        ...state,
        data: state.data.map((post) => {
          if (post.id === action.id) {
            return { ...post, isFavorite: !post.isFavorite };
          }
          return post;
        }),
      };

    default:
      return state;
  }
};

export default posts;
