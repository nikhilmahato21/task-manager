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
exports.action = void 0;
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
const action = (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const formData = yield request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
        yield axios_1.default.post("/tasks", data);
        const modal = document.getElementById("my_modal_3");
        if (modal) {
            modal.close();
        }
        else {
            console.error("Modal element not found");
        }
        const modalOpen = document.getElementById("my_modal_1");
        if (modalOpen) {
            modalOpen.showModal();
        }
        else {
            console.error("Modal element not found");
        }
        return (0, react_router_dom_1.redirect)("/");
    }
    catch (error) {
        return error;
    }
});
exports.action = action;
const TaskModal = () => {
    return (<div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-3xl">
          <button onClick={() => {
            const modal = document.getElementById("my_modal_3");
            if (modal) {
                modal.close();
            }
            else {
                console.error("Modal element not found");
            }
        }} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <react_router_dom_1.Form method="post">
            <div className="border-b-4 mb-4 text-center border-slate-700 font-bold text-3xl">
              <h1>Add Task</h1>
            </div>
            <div>
              <label className="block text-sm font-bold tracking-wide text-gray-700">
                Title
              </label>
              <input type="text" name="title" className="my-1 block py-2 px-1  border-2 w-full rounded-md text-slate-700 font-semibold text-sm border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"/>
            </div>
            <div>
              <label className="block text-sm  font-bold tracking-wide text-gray-700">
                Description
              </label>
              <textarea name="description" className="my-1 block py-2 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"/>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div>
                <label className="block text-sm  font-bold tracking-wide text-gray-700">
                  Deadline
                </label>
                <input name="deadline" type="date" className="my-1 block py-2 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"/>
              </div>
              <div>
                <label className="block text-sm font-bold tracking-wide text-gray-700">
                  Priority
                </label>
                <select name="priority" className="my-1 block py-3 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm  font-bold tracking-wide text-gray-700">
                  Status
                </label>
                <select name="status" className="my-1 block py-3 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm">
                  <option value="todo">To Do</option>
                  <option value="inProgress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>

            <div>
              <button type="submit" className="inline-flex justify-center py-2 px-4  shadow-sm text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-900 hover:shadow-lg ">
                Add Task
              </button>
            </div>
          </react_router_dom_1.Form>
        </div>
      </dialog>
    </div>);
};
exports.default = TaskModal;
