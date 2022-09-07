import './App.css';
import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(newTodo) {
    setTodos([...todos, newTodo]);
    return;
  }

  function deleteTodoHandler(index) {
    return setTodos(todos.filter((todo, inx) => inx !== index));
  }

  return (
    <div className="App">
      <h1>ToDo list</h1>
      <AddTodo addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
