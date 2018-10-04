import React from 'react'
import reactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App'

reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('app'));