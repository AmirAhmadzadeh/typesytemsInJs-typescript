import { Sorter } from './Sorter';

export class StringCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return (
      this.data[leftIdx].toLocaleLowerCase() >
      this.data[rightIdx].toLocaleLowerCase()
    );
  }

  swap(leftIdx: number, rightIdx: number): void {
    let strArr = this.data.split('');
    let leftHand = strArr[leftIdx];
    strArr[leftIdx] = strArr[rightIdx];
    strArr[rightIdx] = leftHand;
    this.data = strArr.join('');
  }

  get length(): number {
    return this.data.length;
  }
}
