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
exports.loader = void 0;
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
const loader = (_a) => __awaiter(void 0, [_a], void 0, function* ({ params }) {
    try {
        const { data } = yield axios_1.default.get(`/tasks/${params.id}`);
        console.log(data);
        return data;
    }
    catch (error) {
        console.error("Error fetching the task:", error);
    }
    return (0, react_router_dom_1.redirect)("/");
});
exports.loader = loader;
const TaskDetails = () => {
    var _a;
    const task = (0, react_router_dom_1.useLoaderData)();
    console.log(task);
    return (<section className="w-full h-screen  ">
      <div className="flex flex-col items-center mt-10 py-10 p-6 w-full max-w-3xl mx-auto bg-white shadow-xl border rounded-lg min-w-3xl">
        <h1 className="text-2xl font-bold mb-4 capitalize">{task.title}</h1>
        <p className="text-gray-700 font-semibold mb-2">{task.description}</p>
        <div className="flex justify-between w-full mt-4">
          <span className={`text-sm font-semibold py-1 px-2 rounded ${task.status === "expired"
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
          <span className={`text-sm font-semibold py-1 px-2 rounded  ${task.status === "done"
            ? "  bg-white"
            : task.status === "todo"
                ? " text-blue-700 bg-blue-100"
                : task.status === "inProgress"
                    ? "text-amber-500 bg-amber-100"
                    : ""}`}>
            {task.status === "done" ? "" : task.status}
          </span>
        </div>
        <div className="w-full mt-2 text-left">
          <p className="text-slate-800 font-bold">
            {" "}
            deadline :{" "}
            <span className="text-gray-700 font-semibold text-sm">
              {task.deadline ? (_a = task.deadline) === null || _a === void 0 ? void 0 : _a.toString().split("T")[0] : ""}
            </span>
          </p>
        </div>
      </div>
    </section>);
};
exports.default = TaskDetails;
