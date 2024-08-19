"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const hi_1 = require("react-icons/hi");
const taskContext_1 = require("../utils/taskContext");
const TaskColumn = ({ title, tasks, color, borderColor, }) => {
    const { fetchTasks, fetchTotaltasks, fetchExpiredtasks } = (0, taskContext_1.useTasks)();
    return (<div className={`${tasks.length === 0 && "hidden"} px-2 py-2 rounded-md bg-gray-200 h-full `}>
      <div className={`border-b-4 ${borderColor} flex mb-2 items-center justify-center gap-2`}>
        <span className={`h-2 w-2 p-1 mb-3 rounded-full inline-block  ${color}`}></span>
        <span className={`text-xl font-bold mb-4 capitalize `}>{title}</span>
        <span className="bg-gray-100 flex justify-center items-center font-semibold  h-6 w-6 mb-3  rounded-full text-gray-500">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-6">
        {tasks.map((task) => {
            var _a;
            return (<div key={task._id} className="p-4  bg-white shadow rounded-md hover:border hover:border-black hover:shadow-lg">
            <div className="flex justify-between">
              <span className={`text-sm  font-light p-1  rounded-md capitalize  ${task.status === "expired"
                    ? " text-red-700 bg-red-100"
                    : task.status === "done"
                        ? " text-green-700 bg-green-100"
                        : task.priority === "high"
                            ? "text-red-500 bg-red-100"
                            : task.priority === "low"
                                ? " text-amber-700 bg-amber-100"
                                : task.priority === "medium"
                                    ? " text-sky-700 bg-sky-100"
                                    : ""}`}>
                {task.status === "expired"
                    ? "expired❗"
                    : task.status === "done"
                        ? "completed"
                        : task.priority}
              </span>
              <div className="dropdown  dropdown-hover dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <hi_1.HiDotsVertical />
                </div>
                <ul tabIndex={0} className="dropdown-content text-slate-700 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg">
                  <react_router_dom_1.Link to={`/task-details/${task._id}`} className="p-2 hover:bg-gray-100 hover:rounded-lg ">
                    <li className="text-slate-900 font-normal">view task</li>{" "}
                  </react_router_dom_1.Link>
                  <react_router_dom_1.Link to={`/task/${task._id}`} className="p-2 hover:bg-gray-100 hover:rounded-lg ">
                    <li className="text-slate-900 font-normal">edit</li>
                  </react_router_dom_1.Link>
                  <react_router_dom_1.Form method="post" action={`../delete-task/${task._id}`}>
                    <li onClick={() => {
                    fetchTasks();
                    fetchTotaltasks();
                }} className="text-slate-900 font-normal">
                      <button onClick={() => {
                    fetchTasks();
                    fetchTotaltasks();
                    fetchExpiredtasks();
                }} className="p-2">
                        delete
                      </button>
                    </li>
                  </react_router_dom_1.Form>
                </ul>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-2 capitalize">
              {task.title}
            </h3>
            <p className="text-gray-700 text-sm font-semibold mt-2 pb-5">
              {task.description}
            </p>
            <div className="flex justify-between">
              <p className="text-slate-800 font-bold">
                {" "}
                deadline :{" "}
                <span className="text-gray-700 font-semibold text-sm">
                  {task.deadline ? (_a = task.deadline) === null || _a === void 0 ? void 0 : _a.toString().split("T")[0] : ""}
                </span>
              </p>
            </div>
          </div>);
        })}
      </div>
    </div>);
};
exports.default = TaskColumn;
