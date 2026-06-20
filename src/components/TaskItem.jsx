import { useState } from "react";

function TaskItem({
  task,
  onDelete,
  onToggle,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  // SAVE EDIT
  const handleSave = () => {
    if (editedText.trim() === "") return;

    onEdit(editedText); // send new text to parent

    setIsEditing(false); // close edit mode
  };

  return (
    <li>
      {isEditing ? (
        // EDIT MODE UI
        <>
          <input
            value={editedText}
            onChange={(e) =>
              setEditedText(e.target.value)
            }
          />

          <button onClick={handleSave}>
            Save
          </button>

          <button
            onClick={() => {
              setEditedText(task.text);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        // NORMAL VIEW UI
        <>
          <span
            style={{
              textDecoration: task.completed
                ? "line-through"
                : "none",
            }}
          >
            {task.text}
          </span>

          <div>
            <button onClick={onToggle}>
              {task.completed
                ? "Undo"
                : "Complete"}
            </button>

            <button
              onClick={() =>
                setIsEditing(true)
              }
            >
              Edit
            </button>

            <button onClick={onDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;