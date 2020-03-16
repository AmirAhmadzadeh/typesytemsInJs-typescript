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
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.data = data;
    }
    return Node;
}());
var LinkListCollections = /** @class */ (function (_super) {
    __extends(LinkListCollections, _super);
    function LinkListCollections() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkListCollections.prototype.add = function (value) {
        if (this.head) {
            var temp = this.head;
            while (temp.next)
                temp = temp.next;
            temp.next = new Node(value);
            // temp = null;
        }
        else {
            // head is null and list is empty
            this.head = new Node(value);
        }
    };
    LinkListCollections.prototype.logTheLinkedList = function () {
        var temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    };
    LinkListCollections.prototype.at = function (num) {
        if (!this.head)
            throw new Error('out pocacklasmclasm');
        var node = this.head;
        var counter = 0;
        while (node) {
            if (counter === num)
                return node;
            counter++;
            node = node.next;
        }
        throw new Error('out of bound Idx');
    };
    LinkListCollections.prototype.swap = function (lIdx, rIdx) {
        var leftNode = this.at(lIdx);
        var rightNode = this.at(rIdx);
        var temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    };
    LinkListCollections.prototype.compare = function (lIdx, rIdx) {
        if (!this.head)
            throw new Error('List is Enmpty');
        return this.at(lIdx).data > this.at(rIdx).data;
    };
    Object.defineProperty(LinkListCollections.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var len = 1;
            var temp = this.head;
            while (temp.next) {
                temp = temp.next;
                len++;
            }
            return len;
        },
        enumerable: true,
        configurable: true
    });
    return LinkListCollections;
}(Sorter_1.Sorter));
exports.LinkListCollections = LinkListCollections;
