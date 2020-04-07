"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// playground file !!!!
var Boat = /** @class */ (function () {
    function Boat() {
        this.color = 'red';
    }
    Object.defineProperty(Boat.prototype, "formattedColor", {
        get: function () {
            return " The color of the Boat is " + this.color;
        },
        enumerable: true,
        configurable: true
    });
    Boat.prototype.pilot = function () {
        throw new Error();
        console.log('Pilot ...');
    };
    __decorate([
        testDecorator,
        __metadata("design:type", String)
    ], Boat.prototype, "color", void 0);
    __decorate([
        testDecorator,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Boat.prototype, "formattedColor", null);
    __decorate([
        logError('Error In pilot amir is here!'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Boat.prototype, "pilot", null);
    return Boat;
}());
function testDecorator(target, key) {
    console.log('traget', target);
    console.log('key', key);
}
function logError(errMsg) {
    return function (target, key, des) {
        var method = des.value;
        try {
            method();
        }
        catch (error) {
            console.log(errMsg);
        }
    };
}
// const logError = (err: string) => (
//   target: any,
//   key: string,
//   des: PropertyDescriptor
// ) => {
//   const method = des.value;
//   des.value = function () {
//     try {
//       method();
//     } catch (error) {
//       console.log(err);
//     }
//   };
// };
new Boat().pilot();
