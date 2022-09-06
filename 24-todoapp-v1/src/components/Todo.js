import style from './Todo.module.css';

function Todo({ name }) {
  return (
    <div className={style.todoItem}>
      <p>{name}</p>
    </div>
  );
}
export default Todo;
