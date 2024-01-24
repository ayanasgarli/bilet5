import Add from "../pages/Add";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import DetailsPage from "../pages/DetailsPage";
import Basket from "../pages/Basket";
import Wishlist from "../pages/Wishlist";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <DetailsPage />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
];
