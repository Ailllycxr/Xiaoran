import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Porfolio from './components/pages/Porfolio'
import Resume from './components/pages/Resume'
import Error from './components/pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        index: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Porfolio',
        element: <Porfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Error',
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
