const TaskList = ({ tasks, dispatch }) => {
  const handleRemoveTask = (task) => {
    const payload = tasks.filter((item) => item.id !== task.id);
    dispatch({ type: "REMOVE_TASK", payload });
  };
  return (
    <div style={{ flexGrow: 1 }}>
      <h3>Tasks List:</h3>
      {tasks &&
        tasks.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <p>{item.task}</p>
            <button onClick={() => handleRemoveTask(item)}>Remove</button>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
