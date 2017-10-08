import { FETCH_COMMENT, NEW_COMMENT, EDIT_COMMENT, VOTE_ON_COMMENT } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case VOTE_ON_COMMENT:
        case NEW_COMMENT:
        case EDIT_COMMENT:
        case FETCH_COMMENT:
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}