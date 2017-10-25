import {FETCH_POSTS_FOR_CATEGORY, FETCH_POSTS} from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
        case FETCH_POSTS_FOR_CATEGORY:
            return action.payload.data;
        default:
            return state;
    }
}