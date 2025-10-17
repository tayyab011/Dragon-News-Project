import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/Home";
import CategoryNews from './../page/CategoryNews';

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
       path:"/category/:id",
       loader:()=>fetch("/news.json"),
        element: <CategoryNews/>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>auth</h2>,
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