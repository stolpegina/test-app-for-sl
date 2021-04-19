const posts = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS": 
      return action.posts;
    
    case "ADD_POST": 
    {
      const lastComment = state[state.length - 1];
      const lastCommentId = lastComment ? lastComment.id : 0;
      return [
        ...state,
        {
          id: lastCommentId + 1,
          title: action.title,
          body: action.body,
          userId: Math.floor(Math.random() * 10) + 1, //непонятно как задается userId, поэтому берем рандомное значение от 1 до 10
        },
      ];
    }

    case "MOVE_TO_FAVORITES":    
      return state.map(post => {
          if (post.id === action.id){ 
            return {...post, isFavorite: !post.isFavorite}
          }
          return post;
        })

    default:
      return state;
  }
};

export default posts;
