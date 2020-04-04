"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomeController = /** @class */ (function () {
    function HomeController() {
        this.getTheHome = this.getTheHome.bind(this);
    }
    HomeController.prototype.getTheHome = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send(this.getContent(true));
        }
        else {
            res.send(this.getContent(false));
        }
    };
    HomeController.prototype.getProtected = function (req, res) {
        res.send(' This route is protected and you access this');
    };
    HomeController.prototype.getContent = function (status) {
        if (status) {
            return "\n      <div>\n          <h1> Helooooo </h1>\n          <p> You are Logged In Right Now  </p>\n          <a href='http://localhost:3000/logout'> Logout </a>  \n      <div>\n     ";
        }
        return "\n          <div>\n                 <h1> Helooooo </h1>\n                 <p> You are NOT Logged  In Right Now  </p>\n                 <a href='http://localhost:3000/login'> LogIn </a>  \n          <div>\n      ";
    };
    return HomeController;
}());
exports.default = HomeController;
