import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts";
import CategoriesReducer from "./reducer_categories";
import SelectedCategory from "./reducer_selected_category";
import PostReducer from "./reducer_post";
import CommentsReducer from "./reducer_comments";
import CommentReducer from "./reducer_comment";

const rootReducer = combineReducers({
    posts: PostsReducer,
    categories: CategoriesReducer,
    selectedCategory: SelectedCategory,
    post: PostReducer,
    comments: CommentsReducer,
    comment: CommentReducer
});

export default rootReducer;