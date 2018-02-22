import * as actionTypes from "../actions/actionTypes";

const initialState = {
    workouts: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_WORKOUT: 
            return [
                ...state,
                action.workout
            ];
        default: 
            return state;
    }
};

export default reducer;