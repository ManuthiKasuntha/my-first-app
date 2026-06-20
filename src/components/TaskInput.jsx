function TaskInput({
  task,
  setTask,
  addTask,
}) {
  return (
    <div className="input-section">
      <input
        type="text"
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
        placeholder="Enter task"
      />

      <button onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;