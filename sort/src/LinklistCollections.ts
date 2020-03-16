import { Sorter } from './Sorter';

class Node {
  public data: number;
  public next: Node | null = null;
  constructor(data: number) {
    this.data = data;
  }
}
export class LinkListCollections extends Sorter {
  public head: Node | null = null;

  public add(value: number): void {
    if (this.head) {
      let temp = this.head;
      while (temp.next) temp = temp.next;
      temp.next = new Node(value);
      // temp = null;
    } else {
      // head is null and list is empty
      this.head = new Node(value);
    }
  }

  logTheLinkedList(): void {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  at(num: number): Node {
    if (!this.head) throw new Error('out pocacklasmclasm');

    let node: Node | null = this.head;
    let counter = 0;
    while (node) {
      if (counter === num) return node;
      counter++;
      node = node.next;
    }
    throw new Error('out of bound Idx');
  }
  swap(lIdx: number, rIdx: number): void {
    const leftNode = this.at(lIdx);
    const rightNode = this.at(rIdx);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }
  compare(lIdx: number, rIdx: number): boolean {
    if (!this.head) throw new Error('List is Enmpty');
    return this.at(lIdx).data > this.at(rIdx).data;
  }
  get length(): number {
    if (!this.head) return 0;
    let len = 1;
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
      len++;
    }
    return len;
  }
}
