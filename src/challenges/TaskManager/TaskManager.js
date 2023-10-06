import { useReducer } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

const TaskManager = () => {
  const tasksReducer = (state, action) => {
    if (action.type === "ADD_TASK") {
      return [...state, action.payload];
    }
    if (action.type === "REMOVE_TASK") {
      return action.payload;
    }
    return state;
  };

  const taskstate = [{ id: 0, task: "Walk dog" }];
  const [tasks, dispatch] = useReducer(tasksReducer, taskstate);

  return (
    <>
      <div>
        <h1>Task Manager</h1>
      </div>
      <div style={{ display: "flex" }}>
        <AddTask dispatch={dispatch} />
        <TaskList tasks={tasks} dispatch={dispatch} />
      </div>
    </>
  );
};

export default TaskManager;
