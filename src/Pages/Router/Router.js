import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import MyData from "../MyData/MyData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/mydata", element: <MyData /> },
    ],
  },
]);
