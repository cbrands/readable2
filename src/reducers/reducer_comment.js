import { FETCH_COMMENT, NEW_COMMENT, EDIT_COMMENT } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case NEW_COMMENT:
        case EDIT_COMMENT:
        case FETCH_COMMENT:
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}