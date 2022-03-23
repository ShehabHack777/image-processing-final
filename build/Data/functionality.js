"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkingFolder = void 0;
var fs_1 = __importDefault(require("fs"));
function checkingFolder() {
    if (!fs_1.default.existsSync("./src/edited-images")) {
        fs_1.default.mkdirSync("./src/edited-images");
    }
}
exports.checkingFolder = checkingFolder;
