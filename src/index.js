import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import './styles/styles.scss';
import App from './App';
import Loading from "./components/UI/loading";
import registerServiceWorker from './registerServiceWorker';
import reducer from "./store/reducers/reducer";
import authReducer from "./store/reducers/auth";
import { firebase } from "./firebase/firebase";
import * as actions from "./store/actions/actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// routing comes from react-router-redux
const store = createStore(
    combineReducers({
        reducer,
        auth: authReducer,
        routing: routerReducer
    }),
    composeEnhancers(applyMiddleware(thunk, middleware))
);


const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
);


let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render( app, document.getElementById('root'));
        registerServiceWorker();
        hasRendered = true;
    }
};

ReactDOM.render( <Loading />, document.getElementById('root'));

// ReactDOM.render( app, document.getElementById('root'));
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.startFetchWorkouts()).then(() => {
            renderApp();
            if (history.location.pathname === "/hiit-timer") {
                history.push("/hiit-timer/workouts");
            }
        });
    } else {
        store.dispatch(actions.logout());
        renderApp();
        history.push("/hiit-timer");
    }
});
