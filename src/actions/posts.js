import * as api from "../api";

// Action Creators
//1. To Get All the Posts
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data }); //dispatch actions
  } catch (error) {
    console.log(error.message);
  }
};

//2. To Fetch all the Posts.
export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data})
  } catch (error) {
    console.log(error)
  }
}

//3.  To Update the existing Posts with the id.
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: 'UPDATE', payload: data});
  } catch (error) {
    console.log(error.message)
  }
}
