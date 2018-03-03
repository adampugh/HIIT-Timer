import authReducer from "../../../store/reducers/auth";
import * as actionTypes from "../../../store/actions/actionTypes";

test("should set uid for login in authReducer", () => {
    const action = {
        type: actionTypes.LOGIN,
        uid: "123"
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test("should clear uid for login in authReducer", () => {
    const action = {
        type: actionTypes.LOGOUT
    };
    const state = authReducer({uid: "123"}, action);
    expect(state).toEqual({});
});