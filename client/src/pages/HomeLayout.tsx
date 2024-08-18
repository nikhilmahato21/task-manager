import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";

import TaskModal from "../components/TaskModal";
import { TaskProvider } from "../utils/taskContext";

const HomeLayout = () => {
  return (
    <TaskProvider>
      <div className="flex flex-col h-screen">
        {/* Top Section for Search */}
        <Header />

        {/* Main Content */}
        <div className="flex flex-1">
          <LeftSideBar />
          {/* Right Section */}
          <Outlet/>
          <TaskModal />
        </div>
      </div>
    </TaskProvider>
  );
};

export default HomeLayout;
