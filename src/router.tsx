import { createBrowserRouter, redirect } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { Home } = await import("./routes/Home");
      return { Component: Home };
    },
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
