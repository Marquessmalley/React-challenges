import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const AddTask = ({ dispatch }) => {
  const taskRef = useRef();
  const handleAddTask = () => {
    dispatch({
      type: "ADD_TASK",
      payload: { id: uuidv4(), task: taskRef.current.value },
    });
    taskRef.current.value = "";
  };
  return (
    <div style={{ flexGrow: 1 }}>
      <h3>Add Task: </h3>

      <div>
        <input type="text" placeholder="Add Task" name="task" ref={taskRef} />
        <button onClick={handleAddTask}>Add</button>
      </div>
    </div>
  );
};

export default AddTask;
