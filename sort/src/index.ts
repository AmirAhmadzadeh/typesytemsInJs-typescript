import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';
import { LinkListCollections } from './LinklistCollections';

// linked List !
const ll = new LinkListCollections();

ll.add(6);
ll.add(1);
ll.add(-2);
ll.add(4);
ll.add(2);
ll.sort();
// const sorter = new Sorter(ll);
// sorter.sort();
ll.logTheLinkedList();

const numbersCollectionsInstance = new NumbersCollection([1, 34, 92, 23, 101]);
numbersCollectionsInstance.sort();
console.log('sorted Numbers', numbersCollectionsInstance);

const stringCollectionInstance = new StringCollection('XAaaabac');
stringCollectionInstance.sort();
console.log('sorted string :', stringCollectionInstance);
