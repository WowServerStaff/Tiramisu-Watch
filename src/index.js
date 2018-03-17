import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './components/base/App';
import registerServiceWorker from './registerServiceWorker';

// render the application using the router
ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root')
);
registerServiceWorker();
