import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage";
import Eyewear from "./Eyewear/Eyewear";
import ErrorPage from "./ErrorPage";

const routerData = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "eyewear",
    element: <Eyewear />,
  },
]);

export default routerData;
