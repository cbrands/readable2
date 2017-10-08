import { FETCH_POST, NEW_POST, EDIT_POST, VOTE_ON_POST } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case VOTE_ON_POST:
        case NEW_POST:
        case EDIT_POST:
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}