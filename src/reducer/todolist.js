import { combineReducers } from 'redux';
import * as actions from '../action/todolist'

const initState ={
    todoList: ['第一件事情','第二件事情'],
};
const initState2 ={
    dataList1: [{index:1,price:10,unit:'USD'},{index:2,price:20,unit:'USDT'},],
};
const initState3 ={
    dataList3: [{type:'法幣',name:'USD',value:1},{type:'虛擬貨幣',name:'USDT',value:1},],
};

const data1 =( state= initState2, action)=>{
    switch (action.type){
        case actions.ADD_DATA:
          return {
            ...state,
            dataList1: [
              ...state.dataList1,
              action.payload.data,
            ],}
        default:
            return state;
    }
};

const data3 =( state= initState3, action)=>{
    switch (action.type){
        case actions.ADD_DATA3:
          return {
            ...state,
            dataList3: [
              ...state.dataList3,
              action.payload.data,
            ],}
        default:
            return state;
    }
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
const reucers=combineReducers({todoReducer,data1,data3})

export default reucers;