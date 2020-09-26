import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//   name: 'Vova',
//   age: 49,
// });

import { User } from './models/User';

const user = new User({ name: 'Vlad', age: 49 });

const g = axios.get('http://localhost:3000/users/1').then((data) => {
  console.log(data.data);
});
