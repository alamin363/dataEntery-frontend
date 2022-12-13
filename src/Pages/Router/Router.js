import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {path:"/", element: <Main />, errorElement:<h1>error</h1>, children: [
    {path:"/", element:<Home />}
  ]}
])