import axios from '../http/index';
import { AxiosPromise } from 'axios';

interface HasID {
  id?: number;
}

export class DataStore<T extends HasID> {
  //fetch data
  fetch(id: number): AxiosPromise {
    return axios.get(`user/${id}`);
  }

  //save data
  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`user/${id}`, data);
    } else {
      return axios.post(`user`, data);
    }
  }
}
