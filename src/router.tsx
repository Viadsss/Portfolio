import { createBrowserRouter, redirect } from "react-router";
import { Home } from "./routes/Home";
import { Projects } from "./routes/Projects";
import { About } from "./routes/About";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/home", loader: () => redirect("/") },
  { path: "/projects", Component: Projects },
  { path: "/about", Component: About },
]);

export default router;
