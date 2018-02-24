import * as actionTypes from "../actions/actionTypes";

const initialState = {
    workouts: [
        {
            title: "Leg Workout",
            totalTime: "20 minutes",
            exercises: [
                {
                    name: "Crunches",
                    time: 180,
                    color: "linear-gradient(141deg, rgba(101, 241, 238, 0.6) 0%, rgba(67, 254, 192, 0.6) 51%, rgba(67, 254, 192, 0.6) 75%)"
                },
                {
                    name: "Break",
                    time: 30,
                    color: "grey"
                },
                {
                    name: "Squats",
                    time: 180,
                    color: "red"
                },
                {
                    name: "Break",
                    time: 30,
                    color: "purple"
                }
            ]
        },
        {
            title: "Shoulder Workout",
            totalTime: "30 minutes",
            exercises: []
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_WORKOUT: 
            return {
                ...state,
                workouts: [...state.workouts, action.workout]
            };
        default: 
            return state;
    }
};

export default reducer;