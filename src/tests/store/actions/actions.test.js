import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "../../../store/actions/actions";
import * as actionTypes from "../../../store/actions/actionTypes";
import database from "../../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);


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
});

test("should add workout to database and store", (done) => {
    const store = createMockStore({workouts: []});
    const workout = {
        id: "x",
        title: "leg workout",
        totalTime: 0,
        exercises: [],
        index: 2
    };
    store.dispatch(actions.startAddWorkout(workout)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: actionTypes.ADD_WORKOUT,
            workout: {
                id: expect.any(String),
                title: "leg workout",
                totalTime: 0,
                exercises: []
            }
        });
        return database.ref(`workouts/${actions[0].workout.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            title: "leg workout",
            totalTime: 0
        });
        done();
    });
});

// DELETE_WORKOUT
test("should return DELETE_WORKOUT action object", () => {
    const action = actions.deleteWorkout("123");
    expect(action).toEqual({
        type: actionTypes.DELETE_WORKOUT,
        id: "123"
    });
});

test("should remove workout from store", (done) => {
    const store = createMockStore({workouts: []});
    const id = "x";
    store.dispatch(actions.startDeleteWorkout(id)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: actionTypes.DELETE_WORKOUT,
            id
        });
        done();
    })
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

// AUTH ACTIONS

test("should generate login action object", () => {
    const uid = "123";
    const action = actions.login(uid);
    expect(action).toEqual({
        type: actionTypes.LOGIN,
        uid
    });
});

test("should generate logoug action object", () => {
    const action = actions.logout();
    expect(action).toEqual({
        type: actionTypes.LOGOUT
    });
});