import { useState } from "react";

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
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">({todo.category})</p>
            </div>
            <div>
              <button>Completar</button>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
