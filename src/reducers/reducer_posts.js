import _ from "lodash";
import {FETCH_POSTS_FOR_CATEGORY, FETCH_POSTS} from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        case FETCH_POSTS_FOR_CATEGORY:
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
}