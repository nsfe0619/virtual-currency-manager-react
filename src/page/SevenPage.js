import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../action/todolist';

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
  const todoList = useSelector(state => state.todoReducer.todoList);
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

const SevenPage = () => {
    const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoReducer.todoList);
  const [newTodo, setNewTodo] = useState('');
  return (
    <div>
      <span>{`代辦事項數：${todoList.length}`}</span>
      <div>
        <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value); }} />
        <button type="button" onClick={() => { dispatch(addTodo(newTodo)); }}>
          新增事項
        </button>
      </div>
      <TodoListPage />
      <CurrentTask />
    </div>
  );
};
export default SevenPage;