"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginContoroller");
require("./controllers/HomeController");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['Helloooooo'] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function (err) {
    if (err)
        console.log('Error In Index.ts', err);
    console.log('Server is runnig on port http://localhost:3000');
});
