import { combineReducers } from "redux";
//import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import CategoriesReducer from "./reducer_categories";
import SelectedCategory from "./reducer_selected_category";

const rootReducer = combineReducers({
    posts: PostsReducer,
    categories: CategoriesReducer,
    selectedCategory: SelectedCategory
});

export default rootReducer;