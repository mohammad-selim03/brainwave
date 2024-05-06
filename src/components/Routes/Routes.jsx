import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Element: <Login />,
    children: [
      {
        path: "/login",
        Element: <Login />,
      },
      {
        path: "/register",
        Element: <Register />,
      },
    ],
  },
]);

export default router;
