"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const HomeLayout_1 = __importDefault(require("./pages/HomeLayout"));
const TaskModal_1 = require("./components/TaskModal");
const EditTask_1 = require("./pages/EditTask");
const EditTask_2 = __importStar(require("./pages/EditTask"));
const DeleteTask_1 = require("./pages/DeleteTask");
const RightSideBar_1 = __importDefault(require("./components/RightSideBar"));
const TaskDetails_1 = __importDefault(require("./components/TaskDetails"));
const TaskDetails_2 = require("./components/TaskDetails");
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: <HomeLayout_1.default />,
        action: TaskModal_1.action,
        children: [
            {
                index: true,
                element: <RightSideBar_1.default />
            },
            {
                path: "/task-details/:id",
                element: <TaskDetails_1.default />,
                loader: TaskDetails_2.loader
            }
        ]
    },
    {
        path: "task/:id",
        element: <EditTask_2.default />,
        loader: EditTask_2.loader,
        action: EditTask_1.action,
    },
    {
        path: "delete-task/:id",
        action: DeleteTask_1.action,
    },
]);
const Layout = () => {
    return <react_router_dom_1.RouterProvider router={router}/>;
};
exports.default = Layout;
