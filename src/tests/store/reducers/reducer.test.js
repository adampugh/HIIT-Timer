import reducer from "../../../store/reducers/reducer";
import workoutState from "../../fixtures/workouts";
import * as actionTypes from "../../../store/actions/actionTypes";

test("should setup default initial values", () => {
    const state = reducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        workouts: []
    });
});

test("should add workout", () => {
    const action = {
        type: actionTypes.ADD_WORKOUT,
        workout: {
            id: "L6sdg45",
            totalTime: 90,
            title: "Chest Workout",
            exercises: [
                {
                    id: "L2rgf3",
                    color: "#40b3e1",
                    name: "star jumps",
                    time: 180
                }
            ]
        }
    };
    const state = reducer(workoutState, action);
    expect(state).toEqual({
        workouts: [workoutState.workouts[0], workoutState.workouts[1], action.workout]
    });
});


test("should delete workout", () => {
    const action = {
        type: actionTypes.DELETE_WORKOUT,
        id: workoutState.workouts[0].id
    };
    const state = reducer(workoutState, action);
    expect(state).toEqual({
        workouts: [workoutState.workouts[1]]
    });
});

test("should not delete workout if no id is passed", () => {
    const action = {
        type: actionTypes.DELETE_WORKOUT,
        id: "x"
    };
    const state = reducer(workoutState, action);
    expect(state).toEqual(workoutState);
});

test("should add exercise", () => {
    const action = {
        type: actionTypes.ADD_EXERCISE,
        workoutId: workoutState.workouts[0].id,
        exercise: {
            id: "Ldfg4df3",
            color: "#40b3e1",
            name: "wall sit",
            time: 180
        }
    }
    const state = reducer(workoutState, action);
    expect(state).toEqual({
        workouts: [
            {
                ...workoutState.workouts[0],
                exercises: [
                    ...workoutState.workouts[0].exercises,
                    action.exercise
                ]
            },
            workoutState.workouts[1]
        ]
    });
});

test("should delete exercise", () => {
    const action = {
        type: actionTypes.DELETE_EXERCISE,
        index: 0,
        workoutId: workoutState.workouts[0].id
    }
    const state = reducer(workoutState, action);
    expect(state).toEqual({
        workouts: [
            {
                ...workoutState.workouts[0],
                exercises: [
                    workoutState.workouts[0].exercises[1]
                ]
            },
            workoutState.workouts[1]
        ]
    });
});

test("should fetch workouts", () => {
    const action = {
        type: actionTypes.FETCH_WORKOUTS,
        workouts: workoutState.workouts
    };
    const state = reducer(undefined, action);
    expect(state).toEqual(workoutState);
});