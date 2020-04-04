import { UserList } from './View/UserList';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';
import axiosInstance from './http';

const usersCollection = new Collection<User, UserProps>((json: UserProps) => {
  console.log('amir is here from deserialze mehtod');
  return User.createUser(json);
});

usersCollection.on('change', () => {
  const root = document.querySelector('#root');
  if (root) {
    new UserList(root, usersCollection).render();
  }
});
usersCollection.fetch();
