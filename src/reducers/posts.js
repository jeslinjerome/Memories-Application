/* reducers are that function that accept the state and action 
in all cases we use it like this- */
// const reducer = (posts = [], actions) => {

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
