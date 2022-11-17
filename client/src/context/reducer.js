import React from "react";
import { initialState } from "./appContext";
const reducer = (state, action) => {
  if (action.type === "TASK_ADDED") {
    return {
      ...state,
      alert: { msg: "task added to list!!" },
    };
  }

  if (action.type === "DELETE_TASK") {
    return {
      ...state,
      alert: { msg: "task deleted from list!!" },
    };
  }

  if (action.type === "EDIT_TASK") {
    return {
      ...state,
      alert: { msg: "task updated!!" },
    };
  }

  if (action.type === "CLEAR_ALERT") {
    return {
      ...state,
      alert: { msg: "" },
    };
  }

  if (action.type === "GET_TASKS") {
    return {
      ...state,
      list: action.payload.tasks,
    };
  }
};

export default reducer;
