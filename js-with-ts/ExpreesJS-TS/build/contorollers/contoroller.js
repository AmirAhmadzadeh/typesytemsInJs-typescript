"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.getLoginPage = function (req, res) {
        res.send("\n      <form method='POST'> \n       <div>\n         <label> Email : </label>\n         <input name='email' type='text'/>  \n       </div>\n       <div>\n          <label> Password : </label>\n          <input  name='password' type='password' />  \n       </div>\n       \n       <div>\n          <button>\n            Submit \n          </button>\n       </div>\n      </form\n    ");
    };
    Controller.prototype.logIn = function (req, res) {
        // res.send(' Log in method of a controller ! ');
        var _a = req.body, email = _a.email, password = _a.password;
        res.send('amir is her' + email + password);
    };
    return Controller;
}());
exports.default = Controller;
