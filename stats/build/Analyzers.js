"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var AvgGoalAnalysis = /** @class */ (function () {
    function AvgGoalAnalysis() {
    }
    AvgGoalAnalysis.prototype.run = function (matches, teamName) {
        var sumOfGoals = 0;
        var avg = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === teamName) {
                sumOfGoals += match[3];
            }
            else if (match[2] === teamName) {
                sumOfGoals += match[4];
            }
        }
        avg = sumOfGoals / matches.length;
        return "Avrage Goals of " + teamName + " is " + avg;
    };
    return AvgGoalAnalysis;
}());
exports.AvgGoalAnalysis = AvgGoalAnalysis;
var WinsAnalyzer = /** @class */ (function () {
    function WinsAnalyzer() {
    }
    WinsAnalyzer.prototype.run = function (matches) {
        var manUnitedWins = 0;
        for (var _i = 0, matches_2 = matches; _i < matches_2.length; _i++) {
            var match = matches_2[_i];
            if (match[1] == 'Man United' && match[5] == MatchResult_1.matchResult.HomeWin) {
                manUnitedWins++;
            }
            else if (match[2] == 'Man United' && match[5] == MatchResult_1.matchResult.AwayWin) {
                manUnitedWins++;
            }
        }
        return "[ amir is here ] Man United wons " + manUnitedWins + " times";
    };
    return WinsAnalyzer;
}());
exports.WinsAnalyzer = WinsAnalyzer;
