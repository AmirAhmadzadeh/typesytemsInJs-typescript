"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRotes_1 = require("../routes/loginRotes");
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.configiureApp = this.configiureApp.bind(this);
        this.setPort = this.setPort.bind(this);
        this.setRoutes = this.setRoutes.bind(this);
        this.runApp = this.runApp.bind(this);
        this.runApp();
    }
    Server.prototype.configiureApp = function () {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(cookie_session_1.default({ keys: ['icajkncja'] }));
    };
    Server.prototype.setRoutes = function () {
        this.app.use(loginRotes_1.router);
    };
    Server.prototype.setPort = function () {
        this.app.listen(3000, function (err) {
            if (err)
                console.log('Error In Run Method Of a Server Class', err);
            console.log('Server is runnig on port http://localhost:3000');
        });
    };
    Server.prototype.runApp = function () {
        this.configiureApp();
        this.setPort();
        this.setRoutes();
    };
    return Server;
}());
exports.default = Server;
