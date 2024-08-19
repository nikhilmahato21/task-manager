"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const taskContext_1 = require("../utils/taskContext");
const TaskColumn_1 = __importDefault(require("./TaskColumn"));
const RightSideBar = () => {
    const { tasks } = (0, taskContext_1.useTasks)();
    return (<div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TaskColumn_1.default title="To Do" tasks={tasks.filter((task) => task.status === "todo")} color="bg-purple-500" borderColor="border-purple-400"/>
        <TaskColumn_1.default title="On Progress" tasks={tasks.filter((task) => task.status === "inProgress")} color="bg-orange-500" borderColor="border-orange-400"/>
        <TaskColumn_1.default title="Done" tasks={tasks.filter((task) => task.status === "done")} color="bg-green-300" borderColor="border-green-400"/>
        <TaskColumn_1.default title="Expired" tasks={tasks.filter((task) => task.status === "expired")} color="text-red-400" borderColor="border-red-400"/>
      </div>
    </div>);
};
exports.default = RightSideBar;
