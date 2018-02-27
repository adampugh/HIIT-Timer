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
import "./firebase/firebase";
import { startFetchWorkouts } from "./store/actions/actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// routing comes from react-router-redux
const store = createStore(
    combineReducers({
        reducer,
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


// ReactDOM.render( <p>...loading</p>, document.getElementById('root'));

// store.dispatch(startFetchWorkouts()).then(() => {
    ReactDOM.render( app, document.getElementById('root'));
    registerServiceWorker();
// });

// ReactDOM.render( app, document.getElementById('root'));

