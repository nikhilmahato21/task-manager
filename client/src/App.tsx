import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import { action } from "./components/TaskModal";
import { action as updateAction } from "./pages/EditTask";
import EditTask, { loader } from "./pages/EditTask";
import { action as deleteAction } from "./pages/DeleteTask";
import RightSideBar from "./components/RightSideBar";
import TaskDetails from "./components/TaskDetails";
import {loader as detailsLoader} from "./components/TaskDetails"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    action: action,
    children:[
      {
        index:true,
        element:<RightSideBar/>
      },
      {
        path:"/task-details/:id",
        element:<TaskDetails/>,
        loader:detailsLoader
      }

    ]
  },
  {
    path: "task/:id",
    element: <EditTask />,
    loader: loader,
    action: updateAction,
  },
  {
    path: "delete-task/:id",
  
    action: deleteAction,
  },
]);
const Layout = () => {
  return <RouterProvider router={router} />;
};

export default Layout;
