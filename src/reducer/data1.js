import * as actions from '../action/todolist'

const initState ={
    dataList1: [{index:1,price:10,unit:5},{index:2,price:20,unit:15},],
};

const data1 =( state= initState, action)=>{
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

export default data1;