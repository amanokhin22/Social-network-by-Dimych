import store from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import BrowserRouter from "react-router-dom/BrowserRouter";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );


