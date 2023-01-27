import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App/App';
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

const defaultState = {
    email: '',

}
const UPDATE_EMAIL = 'UPDATE_EMAIL';


const reducer = (state = defaultState, action) =>{
    switch (action.type) {
        case UPDATE_EMAIL:
            return {...state, email: action.payload}
        default:
            return state
    }
}

const store = createStore(reducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
