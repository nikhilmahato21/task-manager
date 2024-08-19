"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
const App_tsx_1 = __importDefault(require("./App.tsx"));
require("./index.css");
const react_hot_toast_1 = require("react-hot-toast");
const taskContext_tsx_1 = require("./utils/taskContext.tsx");
(0, client_1.createRoot)(document.getElementById('root')).render(<react_1.StrictMode>
    <taskContext_tsx_1.TaskProvider>
    <App_tsx_1.default />
    </taskContext_tsx_1.TaskProvider>
    <react_hot_toast_1.Toaster />
    
  </react_1.StrictMode>);
