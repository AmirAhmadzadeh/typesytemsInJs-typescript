"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var StringCollection_1 = require("./StringCollection");
var LinklistCollections_1 = require("./LinklistCollections");
// linked List !
var ll = new LinklistCollections_1.LinkListCollections();
ll.add(6);
ll.add(1);
ll.add(-2);
ll.add(4);
ll.add(2);
ll.sort();
// const sorter = new Sorter(ll);
// sorter.sort();
ll.logTheLinkedList();
var numbersCollectionsInstance = new NumbersCollection_1.NumbersCollection([1, 34, 92, 23, 101]);
numbersCollectionsInstance.sort();
console.log('sorted Numbers', numbersCollectionsInstance);
var stringCollectionInstance = new StringCollection_1.StringCollection('XAaaabac');
stringCollectionInstance.sort();
console.log('sorted string :', stringCollectionInstance);
