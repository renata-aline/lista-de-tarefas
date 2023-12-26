import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";


function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "ir para academia",
      category: "pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar react",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
      {todo.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
