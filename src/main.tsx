import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/ReactToastify.min.css'
import { StoreContext, store } from './stores/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'react-calendar/dist/Calendar.css';


export const router = createBrowserRouter([
   // match everything with "*"
   { path: "*", element: <App /> }
 ])

ReactDOM.createRoot(document.getElementById('root')!).render(
      <StoreContext.Provider value={store}>
        <RouterProvider router={router} />
      </StoreContext.Provider>
)
