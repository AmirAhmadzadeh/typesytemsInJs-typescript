export class Attributes<T> {
  constructor(private data: T) {
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  get<k extends keyof T>(key: k): T[k] {
    return this.data[key];
  }

  set(update: T): void {
    this.data = Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
