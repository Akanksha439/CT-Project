import { get } from "mongoose";
import { useEffect, useState } from "react";
import List from "./components/List";
import { useGlobalContext } from "./context/appContext";

function App() {
  const taskStyle = {
    position: "fixed",
    left: "45%",
  };
  const { list, alert, addTask, getTasks, editTask } = useGlobalContext();
  const [task, setTask] = useState("");
  const [editID, setEditID] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      editTask(editID, task);
    } else {
      addTask(task);
    }

    setTask("");
  };

  const getEditTask = (id, name) => {
    setTask(name);
    setEditID(id);
    setIsEdit(true);
  };

  useEffect(() => {
    getTasks();
  }, [list]);

  return (
    <div style={taskStyle}>
      <h2>TO-DO LIST</h2>
      <p>{alert.msg}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">{isEdit ? "edit" : "add"}</button>
      </form>
      <div>
        {list.length > 0 && <List list={list} getEditTask={getEditTask} />}
      </div>
    </div>
  );
}

export default App;
