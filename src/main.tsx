import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/ReactToastify.min.css'
import 'react-calendar/dist/Calendar.css'
import { StoreContext, store } from './stores/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
   // match everything with "*"
   { path: "*", element: <App /> }
 ])

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <StoreContext.Provider value={store}>
        <RouterProvider router={router} />
      </StoreContext.Provider>
   </React.StrictMode>,
)
