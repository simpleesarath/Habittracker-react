import React from 'react'                     //importing all the required components,lib,styles 
import ReactDOM from 'react-dom/client'
import './index.css'
import './bootstrap.min.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>                          {/*rendering app component here*/}
    </Provider>
  </React.StrictMode>
)
