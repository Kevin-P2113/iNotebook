import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./components/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about/",
        element: <About></About>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login/",
        element: <Login></Login>,
      },
      {
        path: "signup/",
        element: <Signup></Signup>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
