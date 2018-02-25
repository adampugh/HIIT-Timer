import * as actionTypes from "../actions/actionTypes";

const initialState = {
    workouts: [
        {
            id: "thisid",
            title: "Leg Workout",
            totalTime: "20",
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
            id: "thatid",
            title: "Shoulder Workout",
            totalTime: "30",
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
        case actionTypes.DELETE_WORKOUT:
            return {
                ...state,
                workouts: state.workouts.filter((item, index) => {
                     if (item.id !== action.id) {
                          return item
                        }
                    })
            };
        case actionTypes.ADD_EXERCISE:
            if (action.exercise.breakIncluded) {
                console.log(action.workoutId);
                // split exercise into break and exercise
            } else {
                return {
                    ...state,
                    // find workout index and add exercise 
                    // , action.exercise
                    // workouts: state.workouts.map(workout => workout.id === action.workoutId ?  : workout)
                    workouts: state.workouts.map((workout, index) => {
                        if (workout.id === action.workoutId) {
                            return {
                                ...workout,
                                exercises: [...workout.exercises, action.exercise]
                            }
                        } else {
                            return workout;
                        }
                    })
                }
            }
            break;
        default: 
            return state;
    }
};

export default reducer;