import * as actions from '../action/todolist'

const initState ={
    todoList: ['第一件事情','第二件事情'],
};

const todoReducer =( state= initState, action)=>{
    switch (action.type){
        case actions.ADD_TODO:
          return {
            ...state,
            todoList: [
              ...state.todoList,
              action.payload.todo,
            ],}
        default:
            console.log('state',state);
            return state;
    }
};

export default todoReducer;