import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Episode from "../pages/episodes/Episode";
import Episodes from "../pages/episodes/Episodes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
