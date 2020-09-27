import { User } from './models/User';

const user = new User({
  name: 'Stupid Man',
  age: 50,
});

user.on('change', () => {
  console.log('User was changed');
});

user.trigger('change');
