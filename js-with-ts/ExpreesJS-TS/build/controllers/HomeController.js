"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./decorators/routes");
var controller_1 = require("./decorators/controller");
var use_1 = require("./decorators/use");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    res.status(403);
    res.send('Not Premitted');
}
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.prototype.getTheHome = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("\n      <div>\n          <h1> Helooooo </h1>\n          <p> You are Logged In Right Now  </p>\n          <a href='http://localhost:3000/auth/logout'> Logout </a>  \n      <div>\n     ");
        }
        else {
            res.send("\n        <div>\n               <h1> Helooooo </h1>\n               <p> You are NOT Logged  In Right Now  </p>\n               <a href='http://localhost:3000/auth/login'> LogIn </a>  \n        <div>);\n        ");
        }
    };
    HomeController.prototype.getProtected = function (req, res) {
        res.send(' This route is protected and you access this');
    };
    __decorate([
        routes_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], HomeController.prototype, "getTheHome", null);
    __decorate([
        routes_1.get('/protected'),
        use_1.use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], HomeController.prototype, "getProtected", null);
    HomeController = __decorate([
        controller_1.controller('')
    ], HomeController);
    return HomeController;
}());
