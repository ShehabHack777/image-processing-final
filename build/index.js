"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_1 = __importDefault(require("./routes/image"));
var server = (0, express_1.default)();
server.use(image_1.default);
server.get("/", function (req, res) {
    res.send("Hello Beautiful Reviewer \uD83C\uDF0D\n  Go to this path to check my work at  /app/?name=icelandwaterfall&height=200&width=300\n\n  and you can check many images[fjord,icelandwterfull,encenadaport,palmtunnel,santamonica]   ");
});
server.listen(3000, function () {
    console.log("Server is starting at prot:3000");
});
exports.default = server;
