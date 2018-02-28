import * as actions from "../../store/actions/actions";
import * as actionTypes from "../../store/actions/actionTypes";

// ADD_WORKOUT
test("should return ADD_WORKOUT action object", () => {
    const workout = {
        id: "123",
        title: "test workout",
        totalTime: 10,
        exercises: []
    }
    const action = actions.addWorkout(workout);
    expect(action).toEqual({
        type: actionTypes.ADD_WORKOUT,
        workout
    });
})

// DELETE_WORKOUT
test("should return DELETE_WORKOUT action object", () => {
    const action = actions.deleteWorkout("123");
    expect(action).toEqual({
        type: actionTypes.DELETE_WORKOUT,
        id: "123"
    });
});

// ADD_EXERCISE
test("should return ADD_EXERCISE action object", () => {
    const exercise = {
        id: "abc",
        color: "#f1f1f1",
        name: "squats",
        time: 60
    }
    const action = actions.addExercise(exercise, "123");
    expect(action).toEqual({
        type: actionTypes.ADD_EXERCISE,
        exercise,
        workoutId: "123"
    });
});

// DELETE_EXERCISE
test("should return DELETE_EXERCISE action object", () => {
    const action = actions.deleteExercise(1, "123");
    expect(action).toEqual({
        type: actionTypes.DELETE_EXERCISE,
        index: 1,
        workoutId: "123"
    });
});

// FETCH_WORKOUTS
test("should return FETCH_WORKOUTS action object", () => {
    const workouts = [
        {
            id: "123",
            title: "leg workout",
            totalTime: 60
        }, {
            id: "456",
            title: "shoulder workout",
            totalTime: 120
        }
    ]
    const action = actions.fetchWorkouts(workouts);
    expect(action).toEqual({
        type: actionTypes.FETCH_WORKOUTS,
        workouts
    });
});





//expect.any(String)
