import { combineReducers } from "redux";

import posts from "./posts";

export default combineReducers({ posts });
// posts: posts, - keys: values - considering both keys and values are same we use it one time.
