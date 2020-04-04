"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import the Routes and Contorollers
var express_1 = require("express");
var LoginContoroller_1 = __importDefault(require("../contorollers/LoginContoroller"));
var authMiddleWare_1 = __importDefault(require("../midlwares/authMiddleWare"));
var HomeController_1 = __importDefault(require("../contorollers/HomeController"));
// Instantiating the Models and Routes !
var loginController = new LoginContoroller_1.default();
var homeController = new HomeController_1.default();
var router = express_1.Router();
exports.router = router;
// routes
//get the login page
router.get('/login', loginController.getLoginPage);
// do the login process !
router.post('/login', loginController.logIn);
// get the root route !
router.get('/', homeController.getTheHome);
//protected Route !
router.get('/protected', authMiddleWare_1.default, homeController.getProtected);
//logout !
router.get('/logout', loginController.logout);
