import axios from '../http/index';
import { AxiosResponse } from 'axios';

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

type Callback = () => void;

export class User {
  public events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(popName: string): string | number {
    return this.data[popName];
  }

  set(update: UserProps): void {
    this.data = Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callBack => {
      callBack();
    });
  }

  fetch(): void {
    // console.log('amir is here', this.get('id'));
    axios
      .get(`user/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      })
      .catch(err => {
        console.log('[Error In Fetch data method]!!', err);
      });
  }

  // save data
  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`user/${id}`, this.data);
    } else {
      axios.post(`user`, this.data);
    }
  }
}
