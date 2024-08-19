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
exports.useTasks = exports.TaskProvider = void 0;
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
// Create the TaskContext
const TaskContext = (0, react_1.createContext)(undefined);
// Create a provider component
const TaskProvider = ({ children, }) => {
    const [tasks, setTasks] = (0, react_1.useState)([]);
    const [totalTasks, setTotaltasks] = (0, react_1.useState)([]);
    const [expiredTasks, setExpiredtasks] = (0, react_1.useState)([]);
    const fetchTasks = (status, search) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const query = new URLSearchParams();
            if (status)
                query.append("status", status);
            if (search)
                query.append("search", search);
            const response = yield axios_1.default.get(`/tasks?${query.toString()}`);
            setTasks(response.data);
        }
        catch (error) {
            console.error("Error fetching tasks:", error);
        }
    });
    const fetchTotaltasks = (status, search) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const query = new URLSearchParams();
            if (status)
                query.append("status", status);
            if (search)
                query.append("search", search);
            const response = yield axios_1.default.get(`/tasks?${query.toString()}`);
            setTotaltasks(response.data);
        }
        catch (error) {
            console.error("Error fetching tasks:", error);
        }
    });
    const fetchExpiredtasks = (status, search) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const query = new URLSearchParams();
            if (status)
                query.append("status", status);
            if (search)
                query.append("search", search);
            const response = yield axios_1.default.get(`/tasks?status=expired`);
            console.log(response.data);
            setExpiredtasks(response.data);
        }
        catch (error) {
            console.error("Error fetching tasks:", error);
        }
    });
    (0, react_1.useEffect)(() => {
        fetchTasks();
        fetchTotaltasks();
        fetchExpiredtasks();
    }, []);
    return (<TaskContext.Provider value={{
            tasks,
            fetchTasks,
            fetchTotaltasks,
            totalTasks,
            expiredTasks,
            fetchExpiredtasks,
        }}>
      {children}
    </TaskContext.Provider>);
};
exports.TaskProvider = TaskProvider;
// Custom hook to use the TaskContext
const useTasks = () => {
    const context = (0, react_1.useContext)(TaskContext);
    if (context === undefined) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
};
exports.useTasks = useTasks;
