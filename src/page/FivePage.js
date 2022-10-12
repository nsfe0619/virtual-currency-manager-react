import React from "react";
import { useState, createContext, useContext } from "react";

// normal task
const FivePage = () => {
    const TodoListContext = createContext();
    const [todoList] = useState(['first', 'second']);

    const TodoList = () =>{
        const todoList=useContext(TodoListContext);
        return todoList.map(task=>(
            <ul key={task}>
                <Task task={task}></Task>
            </ul>
        ))
    }
    const Task = (props) => {
        const { task } = props;
        return <div>{task}</div>;
    }

    const CurrentTask =() =>{
        const todoList=useContext(TodoListContext);
        return <div>{`下一件事要做: ${todoList[0]}`}</div>
    }
    const TodoListPage = () =>{
        return <div>
            <div>其他</div>
            <TodoList />
        </div>
    }
    return (
        <TodoListContext.Provider value={todoList}>
            <div>
                <span>{`代辦事項數: ${todoList.length}`}</span>
                <TodoListPage></TodoListPage>
                <CurrentTask />
            </div>
        </TodoListContext.Provider>
    );
};

export default FivePage;
