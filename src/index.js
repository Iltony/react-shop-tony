import React from 'react'
import reactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppWithRouter from './containers/AppWithRouter'

reactDom.render(
    <BrowserRouter>
        <AppWithRouter />
    </BrowserRouter>
    , document.getElementById('app'));