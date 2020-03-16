import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    if (this.data[leftIdx] > this.data[rightIdx]) return true;
    return false;
  }

  swap(leftIdx: number, rightIdx: number): void {
    const temp = this.data[leftIdx];
    this.data[leftIdx] = this.data[rightIdx];
    this.data[rightIdx] = temp;
  }
  get length(): number {
    return this.data.length;
  }
}
