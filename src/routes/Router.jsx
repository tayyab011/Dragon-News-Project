import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/Home";
import CategoryNews from './../page/CategoryNews';
import Login from "../page/Login";
import Register from './../page/Register';
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../page/NewsDetails";
import PrivateRoute from './../provider/PrivateRoute';
import Loading from "../components/Loading";

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
        hydrateFallbackElement: <Loading />,
        element: <CategoryNews />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading />,
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <h2>err404</h2>,
  },
]);