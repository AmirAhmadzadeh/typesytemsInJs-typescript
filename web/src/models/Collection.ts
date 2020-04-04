import axios from '../http';
import { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  public models: T[] = [];
  public events: Eventing = new Eventing();

  public on = this.events.on;
  public trigger = this.events.trigger;

  constructor(public deserialize: (json: K) => T) {
    this.fetch = this.fetch.bind(this);
  }

  fetch(): void {
    axios
      .get('/user')
      .then((response: AxiosResponse) => {
        response.data.forEach((usr: K) => {
          this.models.push(this.deserialize(usr));
        });
        this.trigger('change');
      })
      .catch(err => {
        console.log(`amir is here Error in fetch 
       method in Collection Class ${err}`);
      });
  }
}
