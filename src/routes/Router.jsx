import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

export const router = createBrowserRouter([
   {
     path: "/",
     element: <HomeLayout/>,
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