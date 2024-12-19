import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import NotFound from "../Components/NotFound/NotFound";

const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Routes;
