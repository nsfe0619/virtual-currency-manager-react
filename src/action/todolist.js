export const ADD_TODO = 'ADD_TODO';
export const ADD_DATA = 'ADD_DATA';
export const ADD_DATA3 = 'ADD_DATA3';

export const addTodo = todo => (
   {
    type: ADD_TODO,
    payload: {
      todo,
    },
  });
  
export const addData = data => (
    {
     type: ADD_DATA,
     payload: {
       data,
     },
   });
   
export const addData3 = data => (
    {
     type: ADD_DATA3,
     payload: {
       data,
     },
   });