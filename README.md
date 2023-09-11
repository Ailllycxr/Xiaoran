# Personal Profile

## Technology Used

| Technology Used |                 Resource URL                 |
| --------------- | :------------------------------------------: |
| Git             | [https://git-scm.com/](https://git-scm.com/) |

## Description

This is a personal profile using react.

## Code Refactor Example

```Javascript (nav bar)
import { Link } from "react-router-dom";
import "../Nav/NavStyle.css";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <h2>Xiaoran</h2>
        </div>
        <div className="right">
          <ul className="list">
            <li className="listItem">
              <Link key={1} className="nav-link text-light" to="/">
                Home
              </Link>
            </li>

            <li className="listItem">
              <Link key={3} className="nav-link text-light" to="/contact">
                Contact
              </Link>
            </li>

            <li className="listItem">
              <Link key={4} className="nav-link text-light" to="/error">
                Error
              </Link>
            </li>

            <li className="listItem">
              <Link key={5} className="nav-link text-light" to="/porfolio">
                Porfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
```

```Javascript (routes)
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
```

## Usage

## Learning Points

1. react
2. components

## Author Info

### Xiaoran Cai

- [LinkedIn](https://www.linkedin.com/in/xrcai/)
- [Github](https://github.com/Aillycxr)

## Credits

- W3school| [https://www.w3schools.com](https://www.w3schools.com)

## License

Copyright (c). All rights reserved.
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
