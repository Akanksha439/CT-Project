import { useContext, useReducer } from "react";
import React from "react";
import reducer from "./reducer";
import axios from "axios";

const initialState = {
  list: [],
  alert: { msg: "" },
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_ALERT" });
    }, 3000);
  };

  const addTask = async (name) => {
    try {
      const { data } = await axios.post(`api/v1/task`, { name });
      // console.log(data);
      dispatch({ type: "TASK_ADDED" });
    } catch (error) {
      console.log(error);
    }
    clearAlert();
  };

  const getTasks = async () => {
    try {
      const response = await axios.get("api/v1/task");
      //console.log(response.data);
      const tasks = await response.data.tasks;
      //console.log(tasks);
      dispatch({ type: "GET_TASKS", payload: { tasks } });
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (id, name) => {
    try {
      //console.log(id, name);
      await axios.patch(`api/v1/task/${id}`, { name });
      dispatch({ type: "EDIT_TASK" });
    } catch (error) {
      console.log(error);
    }
    clearAlert();
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`api/v1/task/${id}`);
      dispatch({ type: "DELETE_TASK" });
    } catch (error) {
      console.log(error);
    }
    clearAlert();
  };
  return (
    <AppContext.Provider
      value={{ ...state, addTask, clearAlert, getTasks, editTask, deleteTask }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState };
