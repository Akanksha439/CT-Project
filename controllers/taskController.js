import Task from "../models/Task.js";

const createTask = async (req, res) => {
  try {
    //console.log(req.body);
    await Task.create(req.body);
    res.status(200).json({ msg: "task is created" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json(`No task with id ${taskID}`);
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json(`No task with id ${taskID}`);
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
export { createTask, getTasks, deleteTask, updateTask };
