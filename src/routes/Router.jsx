import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/Home";
import CategoryNews from './../page/CategoryNews';
import Login from "../page/Login";
import Register from './../page/Register';
import AuthLayout from "../layout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        element: <CategoryNews />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout/>,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register/>,
      },
    ],
  },
  {
    path: "/news",
    element: <h2>news</h2>,
  },
  {
    path: "*",
    element: <h2>err404</h2>,
  },
]);