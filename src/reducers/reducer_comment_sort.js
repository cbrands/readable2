import { COMMENT_SORT } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case COMMENT_SORT:
            return action.payload;
        default:
            return state;
    }
}