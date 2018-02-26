import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';

import './styles/styles.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./store/reducers/reducer";
import "./firebase/firebase";

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer());

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
