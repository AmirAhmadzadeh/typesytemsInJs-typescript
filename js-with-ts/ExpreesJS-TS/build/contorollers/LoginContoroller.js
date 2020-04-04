"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLoginPage = function (req, res) {
        res.send("\n      <form method='POST'> \n       <div>\n         <label>Email:</label>\n         <input name='email' type='text'/>  \n       </div>\n       <div>\n          <label> Password : </label>\n          <input  name='password' type='password' />  \n       </div>\n       <div>\n          <button>Submit</button>\n       </div>\n      </form\n    ");
    };
    LoginController.prototype.logIn = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email === 'hi@hi.com' && password === 'pass') {
            req.session = { loggedIn: true };
            return res.redirect('/');
        }
        res.send('Invalid Email And Password');
    };
    LoginController.prototype.logout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    return LoginController;
}());
exports.default = LoginController;
