import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>ToDo list</h1>
      <AddTodo />
      {/* TodoList */}
      <div>
        <Todo name="Задача 1" />
        <Todo name="Задача 2" />
        <Todo name="Задача 3" />
      </div>
    </div>
  );
}

export default App;
