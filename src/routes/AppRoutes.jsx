import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Un layout común con Header y Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> }
    ]
  }
]);

export default router;
