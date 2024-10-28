import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'//The App component is wrapped with the Provider component,
import './index.css'
import { Provider } from 'react-redux'//This componenteEnables all components in the application to access the Redux store.
import store from './store.js'//The Redux store is imported from the store.js file. This store holds the application's state
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
