import { GET_ERRORS } from "../actions/type";

const initialState = {};

export default function updateState(state=initialState, action) {
    switch(action.type) {
        case GET_ERRORS :
            return action.payload;

        default :
            return state;
    }
}
