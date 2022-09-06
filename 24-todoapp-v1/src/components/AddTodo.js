import style from './AddTodo.module.css';

function AddTodo() {
  return (
    <div>
      <form action="#" className={style.formInput}>
        <input type="text" className={style.input} id="#" />
        <button type="submit" className={style.button}>
          Добавить
        </button>
      </form>
    </div>
  );
}
export default AddTodo;
