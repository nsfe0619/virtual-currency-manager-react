import { createStore } from 'redux';
import reucers from '../reducer/todolist';

const store = createStore(reucers);

export default store;