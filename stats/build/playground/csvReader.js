"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("../utils");
var matchResult;
(function (matchResult) {
    matchResult["AwayWin"] = "A";
    matchResult["HomeWin"] = "H";
    matchResult["Draw"] = "D";
})(matchResult = exports.matchResult || (exports.matchResult = {}));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) { return row.split(','); })
            .map(function (row) {
            return [
                utils_1.dataStrtoDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
