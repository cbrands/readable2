import _ from "lodash";
import {FETCH_COMMENTS} from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.payload.data;
        default:
            return state;
    }
}

function sanetize(data) {
    return Object.values(data);
}