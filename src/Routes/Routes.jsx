import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import AddFood from "../Pages/AddFood/AddFood";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import ManageMyFoods from "../Pages/ManageMyFood/ManageMyFoods";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Update from "../Pages/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/availableFood",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/food"),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoutes>
            <AddFood></AddFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myFood",
        element: (
          <PrivateRoutes>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoutes>
        ),
      },
      {
        path: "/manageMyFood",
        element: (
          <PrivateRoutes>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update/:_id",
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/allFood"),
      },
    ],
  },
]);

export default router;
