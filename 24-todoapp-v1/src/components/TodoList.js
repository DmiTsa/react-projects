import style from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos, deleteTodo }) {
  console.log(todos);
  return (
    <div className={style.list}>
      {!todos.length ? (
        <h2>List is empty</h2>
      ) : (
        todos.map((todo, index) => (
          <Todo
            key={index}
            indexTodo={index}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}
export default TodoList;
