import { createBrowserRouter, redirect } from "react-router";
import { RootErrorBoundary } from "./routes/RootErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { Home } = await import("./routes/Home");
      return { Component: Home };
    },
    ErrorBoundary: RootErrorBoundary,
  },
  {
    path: "/home",
    loader: () => redirect("/"),
  },
  {
    path: "/projects",
    lazy: async () => {
      const { Projects } = await import("./routes/Projects");
      return { Component: Projects };
    },
  },
  {
    path: "/about",
    lazy: async () => {
      const { About } = await import("./routes/About");
      return { Component: About };
    },
  },
]);

export default router;
