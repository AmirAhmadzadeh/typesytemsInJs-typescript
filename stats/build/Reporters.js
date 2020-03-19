"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        var html = "<html>\n      <head>\n          <style> \n            body , *{ \n              padding:0 ; \n              margin : 0 ; \n              font-size : 15px ;\n              box-sizing : 'border-box' ;  \n            }\n          </style> \n      </head> \n      <body> \n          <h1> This is the Report  <h1>\n\n          <div class='report'> \n             " + report + " \n          </div>\n      </body> \n    </html>";
        fs_1.default.writeFileSync('report.html', html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
var ConsoleReport = /** @class */ (function () {
    function ConsoleReport() {
    }
    ConsoleReport.prototype.print = function (report) {
        console.log(report);
    };
    return ConsoleReport;
}());
exports.ConsoleReport = ConsoleReport;
