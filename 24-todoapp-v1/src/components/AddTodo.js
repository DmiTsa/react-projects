import { useState } from 'react';
import style from './AddTodo.module.css';

function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(text);
    setText('');
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler} className={style.formInput}>
        <input
          type="text"
          className={style.input}
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button type="submit" className={style.button}>
          Добавить
        </button>
      </form>
    </div>
  );
}
export default AddTodo;
