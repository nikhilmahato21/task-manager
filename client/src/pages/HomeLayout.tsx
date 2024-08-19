import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftSideBar from "../components/LeftSideBar";

import TaskModal from "../components/TaskModal";
import { useTasks } from "../utils/taskContext";

const HomeLayout = () => {
  const { fetchTasks, fetchTotaltasks, fetchExpiredtasks } = useTasks();

  return (
    <div className="flex flex-col h-screen">
      {/* Top Section for Search */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1">
        <LeftSideBar />
        {/* Right Section */}
        <Outlet />
        <TaskModal />
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-sm">
          <div className="flex flex-col  justify-center items-center">
            <img
              src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1724006904/icons8-checked-checkbox-50_obcywb.png"
              alt="tick"
            />
            <h1 className="max-w-60 font-bold p-2 text-center">
              New task has been created successfully
            </h1>
            <button
              onClick={() => {
                fetchTasks();
                fetchExpiredtasks();
                fetchTotaltasks();

                const modalOpen = document.getElementById(
                  "my_modal_1"
                ) as HTMLDialogElement | null;
                if (modalOpen) {
                  modalOpen.close();
                } else {
                  console.error("Modal element not found");
                }
              }}
              className=" p-3 w-44 rounded-lg text-white font-semibold tracking-wide  bg-slate-900"
            >
              Back
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default HomeLayout;
