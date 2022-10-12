import React from "react";
import { useState } from "react";

// normal task
const FourPage = () => {
    const Task = (props) => {
        const { task } = props;
        return <div>{task}</div>;
    }
    const [TodoList] = useState(['first', 'second']);

    //every single rendering trigger the following code once
    console.log("Form rendered");
    return (
        TodoList.map(task => (<Task key={task} task={task} />))
    );
};

export default FourPage;
