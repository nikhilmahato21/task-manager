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
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const react_router_dom_1 = require("react-router-dom");
const action = (_a) => __awaiter(void 0, [_a], void 0, function* ({ params }) {
    console.log(params);
    try {
        yield axios_1.default.delete(`/tasks/${params.id}`);
        react_hot_toast_1.default.success("deleted successfully");
        return (0, react_router_dom_1.redirect)("/");
    }
    catch (error) {
        return error;
    }
});
exports.action = action;
const DeleteTask = () => {
    return <div>DeleteTask</div>;
};
exports.default = DeleteTask;
