import ReactDOM from 'react-dom/client';

import React from 'react'


import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import reducer from './context/reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <StateProvider initialState={initialState} reducer={reducer}>
                <App />
            </StateProvider>
        </Router>
    </React.StrictMode>
)


/* ReactDOM.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </Router>,
    document.getElementById("root")
); */