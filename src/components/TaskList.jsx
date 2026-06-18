import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;