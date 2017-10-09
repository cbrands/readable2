import { POST_SORT } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case POST_SORT:
            return action.payload;
        default:
            return state;
    }
}