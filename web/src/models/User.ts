import { Model } from './Model';
import { Eventing } from './Eventing';
import { DataStore } from './DataStore';
import { Attributes } from './Attributes';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User extends Model<UserProps> {
  static createUser(data: UserProps): User {
    // create a user !
    return new User(
      new Attributes<UserProps>(data),
      new Eventing(),
      new DataStore<UserProps>()
    );
  }

  makeRandomAge = () => Math.round(Math.random() * 100);
}
