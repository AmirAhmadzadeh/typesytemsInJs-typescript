//Import the Routes and Contorollers
import { Router, Response, Request } from 'express';
import LoginController from '../contorollers/LoginContoroller';
import requireAuth from '../midlwares/authMiddleWare';
import HomeController from '../contorollers/HomeController';

// Instantiating the Models and Routes !
const loginController = new LoginController();
const homeController = new HomeController();
const router = Router();

// routes

//get the login page
router.get('/login', loginController.getLoginPage);

// do the login process !
router.post('/login', loginController.logIn);

// get the root route !
router.get('/', homeController.getTheHome);

//protected Route !
router.get('/protected', requireAuth, homeController.getProtected);

//logout !
router.get('/logout', loginController.logout);
// exporting the router !
export { router };
