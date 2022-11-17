import express from "express";
const router = express.Router();
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";

router.route("/").get(getTasks).post(createTask);
router.route("/:id").delete(deleteTask).patch(updateTask);

export default router;
