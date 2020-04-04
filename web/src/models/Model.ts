import { Callback } from './types';
import { AxiosPromise } from 'axios';

export interface DataSync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface ModelAttributes<T> {
  set(update: T): void;
  get<k extends keyof T>(key: k): T[k];
  getAll(): T;
}
export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  public trigger = this.events.trigger;
  public on = this.events.on;
  public get = this.attributes.get;

  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private dataSync: DataSync<T>
  ) {
    this.set = this.set.bind(this);
    this.fetch = this.fetch.bind(this);
    this.save = this.save.bind(this);
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');
    if (typeof id !== 'number') {
      new Error('The Id for fetching data is not a number');
    }
    this.dataSync.fetch(id).then(response => {
      this.set(response.data);
    });
  }

  save(): void {
    this.dataSync
      .save(this.attributes.getAll())
      .then(response => {
        this.trigger('save');
      })
      .catch(err => {
        this.trigger('error');
        console.log('Error in saving a data', err);
      });
  }
}
