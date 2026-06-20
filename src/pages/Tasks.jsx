import { useState, useEffect } from "react";

import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load from localStorage (runs once when page opens)
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save to localStorage (runs whenever tasks change)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  // Delete task
  const deleteTask = (indexToDelete) => {
    const updated = tasks.filter(
      (_, index) => index !== indexToDelete
    );

    setTasks(updated);
  };

  // Toggle complete
  const toggleTask = (indexToToggle) => {
    const updated = tasks.map((t, index) => {
      if (index === indexToToggle) {
        return {
          ...t,
          completed: !t.completed,
        };
      }
      return t;
    });

    setTasks(updated);
  };

  // ✏️ EDIT TASK (NEW FUNCTION)
  const editTask = (indexToEdit, newText) => {
    const updated = tasks.map((t, index) => {
      if (index === indexToEdit) {
        return {
          ...t,
          text: newText,
        };
      }
      return t;
    });

    setTasks(updated);
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
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

export default Tasks;