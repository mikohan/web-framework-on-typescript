import { User } from './models/User';

const user = new User({ name: 'Vlad', age: 49 });

user.on('change', () => {
  console.log('Change one');
});

user.on('change', () => {
  console.log('Change two');
});

user.on('some_custom_event', () => {
  console.log('Change custom_evnt');
});

user.trigger('change');
