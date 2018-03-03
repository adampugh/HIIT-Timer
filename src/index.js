import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import './styles/styles.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./store/reducers/reducer";
import authReducer from "./store/reducers/auth";
import { firebase } from "./firebase/firebase";
// import { startFetchWorkouts } from "./store/actions/actions";
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

ReactDOM.render( <p>...loading</p>, document.getElementById('root'));

// ReactDOM.render( app, document.getElementById('root'));
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.startFetchWorkouts()).then(() => {
            renderApp();
            if (history.location.pathname === "/") {
                history.push("/workouts");
            }
        });
    } else {
        store.dispatch(actions.logout());
        renderApp();
        history.push("/");
    }
});
