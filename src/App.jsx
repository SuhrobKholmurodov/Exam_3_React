import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./App.css";
import Home from "./pages/Home/Home";
import Doctors from "./pages/Doctors/Doctors";
import Services from "./pages/Services/Services";
import Diagnos from "./pages/Diagnos/Diagnos";
import Tests from "./pages/Tests/Tests";
import Stock from "./pages/Stock/Stock";
import Patients from "./pages/Patients/Patients";
import Clinic from "./pages/Clinic/Clinic";
import Reviews from "./pages/Reviews/Reviews";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";

import twomen from "../src/assets/twomen.png";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/Doctors",
          element: <Doctors />,
        },
        {
          path: "/Services",
          element: <Services />,
        },
        {
          path: "/Diagnos",
          element: <Diagnos />,
        },
        {
          path: "/Tests",
          element: <Tests />,
        },
        {
          path: "/Stock",
          element: <Stock />,
        },
        {
          path: "/Patients",
          element: <Patients />,
        },
        {
          path: "/Clinic",
          element: <Clinic />,
        },
        {
          path: "/Reviews",
          element: <Reviews />,
        },
        {
          path: "/Contacts",
          element: <Contacts />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
export { twomen };
