import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  editTask,
}) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
          onToggle={() => toggleTask(index)}
          onEdit={(newText) =>
            editTask(index, newText)
          }
        />
      ))}
    </ul>
  );
}

export default TaskList;