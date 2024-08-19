"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("../components/Header"));
const LeftSideBar_1 = __importDefault(require("../components/LeftSideBar"));
const TaskModal_1 = __importDefault(require("../components/TaskModal"));
const taskContext_1 = require("../utils/taskContext");
const HomeLayout = () => {
    const { fetchTasks, fetchTotaltasks, fetchExpiredtasks } = (0, taskContext_1.useTasks)();
    return (<div className="flex flex-col h-screen">
      {/* Top Section for Search */}
      <Header_1.default />

      {/* Main Content */}
      <div className="flex flex-1">
        <LeftSideBar_1.default />
        {/* Right Section */}
        <react_router_dom_1.Outlet />
        <TaskModal_1.default />
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-sm">
          <div className="flex flex-col  justify-center items-center">
            <img src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1724006904/icons8-checked-checkbox-50_obcywb.png" alt="tick"/>
            <h1 className="max-w-60 font-bold p-2 text-center">
              New task has been created successfully
            </h1>
            <button onClick={() => {
            fetchTasks();
            fetchExpiredtasks();
            fetchTotaltasks();
            const modalOpen = document.getElementById("my_modal_1");
            if (modalOpen) {
                modalOpen.close();
            }
            else {
                console.error("Modal element not found");
            }
        }} className=" p-3 w-44 rounded-lg text-white font-semibold tracking-wide  bg-slate-900">
              Back
            </button>
          </div>
        </div>
      </dialog>
    </div>);
};
exports.default = HomeLayout;
