"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.action = exports.loader = void 0;
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const react_router_dom_2 = require("react-router-dom");
const bs_1 = require("react-icons/bs");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const taskContext_1 = require("../utils/taskContext");
const loader = (_a) => __awaiter(void 0, [_a], void 0, function* ({ params }) {
    try {
        const { data } = yield axios_1.default.get(`/tasks/${params.id}`);
        console.log(data);
        return data;
    }
    catch (error) {
        console.error("Error fetching the task:", error);
    }
    return (0, react_router_dom_2.redirect)("/");
});
exports.loader = loader;
const action = (_a) => __awaiter(void 0, [_a], void 0, function* ({ request, params }) {
    const formData = yield request.formData();
    const data = Object.fromEntries(formData);
    try {
        yield axios_1.default.put(`/tasks/${params.id}`, data);
        react_hot_toast_1.default.success("Task Updated! ");
        return (0, react_router_dom_2.redirect)("/");
    }
    catch (error) {
        return error;
    }
});
exports.action = action;
const EditTask = () => {
    const task = (0, react_router_dom_1.useLoaderData)();
    const { fetchExpiredtasks, fetchTotaltasks } = (0, taskContext_1.useTasks)();
    return (<section className="w-full h-screen flex justify-center items-center">
      <div className=" w-full max-w-3xl border-2 border-slate-600 rounded-md p-2">
        <react_router_dom_1.Form method="post">
          <div className="border-b-4 mb-4 text-center flex justify-center items-center gap-1 py-3 border-slate-700 font-bold text-3xl">
            <h1>Edit Task</h1> <bs_1.BsPencilSquare />
          </div>
          <div>
            <label className="block text-sm font-bold tracking-wide text-gray-700">
              Title
            </label>
            <input type="text" name="title" defaultValue={task.title} className="my-1 block py-2 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"/>
          </div>
          <div>
            <label className="block text-sm font-bold tracking-wide text-gray-700">
              Description
            </label>
            <textarea name="description" defaultValue={task.description} className="my-1 block py-2 px-1 text-slate-700 font-semibold text-sm max-h-2xl  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"/>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-bold tracking-wide text-gray-700">
                Deadline
              </label>
              <input name="deadline" defaultValue={task.deadline ? task.deadline.toString().split("T")[0] : ""} type="date" className="my-1 block py-2 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"/>
            </div>
            <div>
              <label className="block text-sm font-bold tracking-wide text-gray-700">
                Priority
              </label>
              <select defaultValue={task.priority} name="priority" className="my-1 block py-3 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold tracking-wide text-gray-700">
                Status
              </label>
              <select defaultValue={task.status} name="status" className="my-1 block py-3 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm">
                <option value="todo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          <div>
            <button onClick={() => {
            fetchTotaltasks();
            fetchExpiredtasks();
        }} type="submit" className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-700 hover:bg-slate-900 ">
              Update Task
            </button>
          </div>
        </react_router_dom_1.Form>
      </div>
    </section>);
};
exports.default = EditTask;
