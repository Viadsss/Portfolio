import { createBrowserRouter, redirect } from "react-router";
import { Home } from "./routes/Home";
import { Projects } from "./routes/Projects";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/home", loader: () => redirect("/") },
  { path: "/projects", Component: Projects },
]);

export default router;
