"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataStrtoDate = function (date) {
    var dateParts = date.split('/').map(function (dstr) { return parseInt(dstr); });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
