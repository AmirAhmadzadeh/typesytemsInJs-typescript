"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var StringCollection = /** @class */ (function (_super) {
    __extends(StringCollection, _super);
    function StringCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    StringCollection.prototype.compare = function (leftIdx, rightIdx) {
        return (this.data[leftIdx].toLocaleLowerCase() >
            this.data[rightIdx].toLocaleLowerCase());
    };
    StringCollection.prototype.swap = function (leftIdx, rightIdx) {
        var strArr = this.data.split('');
        var leftHand = strArr[leftIdx];
        strArr[leftIdx] = strArr[rightIdx];
        strArr[rightIdx] = leftHand;
        this.data = strArr.join('');
    };
    Object.defineProperty(StringCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return StringCollection;
}(Sorter_1.Sorter));
exports.StringCollection = StringCollection;
