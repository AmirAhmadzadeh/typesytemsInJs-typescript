import { User } from './models/User';

const user = new User({ id: 1 });

user.fetch();
user.set({ name: 'nameChangedByMe' });
user.save();
setTimeout(() => {
  console.log(user, '*** = user info is fetch called');
}, 5000);

const user2 = new User({ id: 2 });

user2.fetch();
user2.set({ name: 'amir2', age: 100 });
user2.save();
setTimeout(() => {
  console.log(user, '*** = user info is fetch called');
}, 5000);
