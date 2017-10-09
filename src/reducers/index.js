import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts";
import CategoriesReducer from "./reducer_categories";
import SelectedCategory from "./reducer_selected_category";
import PostReducer from "./reducer_post";
import CommentsReducer from "./reducer_comments";
import CommentReducer from "./reducer_comment";
import PostSortReducer from'./reducer_post_sort';
import CommentSortReducer from'./reducer_comment_sort';

const rootReducer = combineReducers({
    posts: PostsReducer,
    categories: CategoriesReducer,
    selectedCategory: SelectedCategory,
    post: PostReducer,
    comments: CommentsReducer,
    comment: CommentReducer,
    postSort: PostSortReducer,
    commentSort: CommentSortReducer
});

export default rootReducer;