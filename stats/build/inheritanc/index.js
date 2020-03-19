"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var MatchcsvReader_1 = require("./MatchcsvReader");
var manUnitedWins = 0;
var reader = new MatchcsvReader_1.MatchcsvReader('football.csv');
reader.read();
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] == 'Man United' && match[5] == MatchResult_1.matchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] == 'Man United' && match[5] == MatchResult_1.matchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log('manUnited Wins Equals to : ', manUnitedWins);
