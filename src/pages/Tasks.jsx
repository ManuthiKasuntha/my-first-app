import { useState, useEffect } from "react";

import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

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
    <div>
      <h2>Task Manager</h2>

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

export default Tasks;