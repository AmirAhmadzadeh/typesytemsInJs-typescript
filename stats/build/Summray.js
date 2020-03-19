"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Analyzers_1 = require("./Analyzers");
var Reporters_1 = require("./Reporters");
var Summary = /** @class */ (function () {
    function Summary(analyzer, output) {
        this.analyzer = analyzer;
        this.output = output;
    }
    Summary.consoleReportForWins = function () {
        return new Summary(new Analyzers_1.WinsAnalyzer(), new Reporters_1.ConsoleReport());
    };
    Summary.consoleReportForAvgGoals = function () {
        return new Summary(new Analyzers_1.AvgGoalAnalysis(), new Reporters_1.ConsoleReport());
    };
    Summary.htmlReportForWins = function () {
        return new Summary(new Analyzers_1.WinsAnalyzer(), new Reporters_1.HtmlReport());
    };
    Summary.htmlReportForAvgGoals = function () {
        return new Summary(new Analyzers_1.AvgGoalAnalysis(), new Reporters_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches, teamName) {
        var ReportedStr = this.analyzer.run(matches, teamName);
        this.output.print(ReportedStr);
    };
    return Summary;
}());
exports.Summary = Summary;
