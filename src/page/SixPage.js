import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Task = (props) => {
  const { task } = props;
  return <li>{task}</li>;
};

Task.propTypes = {
  task: PropTypes.string,
};

Task.defaultProps = {
  task: '',
};

const TodoList = () => {
  const todoList = useSelector(state => {
    console.log('state',state);
    return state.todoReducer.todoList});
  return todoList.map(task => (
    <ul key={task}>
      <Task task={task} />
    </ul>
  ));
};

const TodoListPage = () => (
  <div>
    <div>其他內容什麼的</div>
    <TodoList />
  </div>
);

const CurrentTask = () => {
  const todoList = useSelector(state => state.todoReducer.todoList);
  return <div>{`下一件事要做：${todoList[0]}`}</div>;
};

const SixPage = () => {
  const todoList = useSelector(state => state.todoReducer.todoList);
  return (
    <div>
      <span>{`代辦事項數：${todoList.length}`}</span>
      <TodoListPage />
      <CurrentTask />
    </div>
  );
};
export default SixPage;