import { useState } from "react";
import "./App.css";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskInput
        task={task}
        setTask={setTask}
        addTask={addTask}
      />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;