import React from 'react'
import * as ReactDOM from 'react-dom/client'
import * as ReactRouterDOM from 'react-router-dom'
import { App as AntdApp } from 'antd'
import App from './App'
import './styles/index.scss'

const { BrowserRouter } = ReactRouterDOM;

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <AntdApp>
            <App />
        </AntdApp>
    </BrowserRouter>
)