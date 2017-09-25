import _ from "lodash";
import { FETCH_CATEGORIES } from "../actions";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            console.log("reducer");
            console.log(action);
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
}