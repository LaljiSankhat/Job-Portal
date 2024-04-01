import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Router } from 'react-router-dom'
import router from './Router/Router.jsx'
// import router from './Router/Routers.jsx'
// import router from 'Routers.jsx'
import { RouterProvider } from 'react-router'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
