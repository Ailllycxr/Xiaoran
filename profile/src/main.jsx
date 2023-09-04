import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact";
import Porfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        index: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Porfolio",
        element: <Porfolio />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
      {
        path: "/Error",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
