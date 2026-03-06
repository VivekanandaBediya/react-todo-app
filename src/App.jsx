import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks( tasks.map((task) => task.id === id ? { ...task, text: newText } : task));
  };

  return (
    <div className="container">
      <Header />

      <div className="input-section">
        <input type="text" value={input} placeholder="Add new task..." onChange={(e) => setInput(e.target.value)}/>

        <button onClick={addTask}>Add</button>
      </div>

      <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask}/>
    </div>
  );
}

export default App;