import { RiTodoFill } from 'react-icons/ri';
import style from './Todo.module.css';

function Todo(props) {
  const { indexTodo, todo, deleteTodo } = props;

  return (
    <div className={style.todoItem} onDoubleClick={() => deleteTodo(indexTodo)}>
      <p className={style.textTodo}>
        <RiTodoFill className={style.icon} />
        {todo}
      </p>
    </div>
  );
}
export default Todo;
