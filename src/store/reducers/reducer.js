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
            return {
                ...state,
                workouts: state.workouts.map((workout, index) => {
                    if (workout.id === action.workoutId) {
                        return {
                            ...workout,
                            exercises: [...workout.exercises, action.exercise]
                        }
                    } else {
                        return {...workout};
                    }
                })
            }
        case actionTypes.DELETE_EXERCISE:
            return {
                ...state,
                workouts: state.workouts.map((workout, index) => {
                    if (workout.id === action.workoutId) {
                        return {
                            ...workout,
                            exercises: workout.exercises.filter((exercise, index) => index !== action.index)
                        }
                    } else {
                        return {...workout}
                    }
                })
            }
        default: 
            return state;
    }
};

export default reducer;