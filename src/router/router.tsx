import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Episode from "../pages/episodes/Episode";
import Episodes from "../pages/episodes/Episodes";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      let { App } = await import("../App");
      return { Component: App };
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/episodes",
        element: <Episodes />,
      },
      {
        path: "/episodes/:id",
        element: <Episode />,
      },
    ],
  },
]);

export default router;
