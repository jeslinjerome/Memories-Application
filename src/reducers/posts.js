/* reducers are that function that accept the state and action 
in all cases we use it like this- */
// const reducer = (posts = [], actions) => {

export default (posts = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
