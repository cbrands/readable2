import { FETCH_POST, NEW_POST, EDIT_POST } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case NEW_POST:
        case EDIT_POST:
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}