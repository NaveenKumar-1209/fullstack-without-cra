import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Registration from "../Pages/registration";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
