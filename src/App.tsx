import { useState } from "react";
import Tasks from "./containers/Tasks";
import Finished from "./containers/Finished";

import "./App.css";
import Input from "./containers/Input";

interface Task {
  id: number;
  task: string;
  isFinished: boolean;
}

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [finishedTasks, setFinishedTasks] = useState<Task[]>([]);

  const addTask = (task: string) => {
    const newTask: Task = {
      id: tasks.length + finishedTasks.length + 1,
      task: task,
      isFinished: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const deleteFinishedTask = (taskId: number) => {
    const updatedFinishedTasks = finishedTasks.filter(
      (task) => task.id !== taskId
    );
    setFinishedTasks(updatedFinishedTasks);
  };

  const moveToFinished = (taskId: number) => {
    const taskToMove = tasks.find((task) => task.id === taskId);
    if (taskToMove) {
      taskToMove.isFinished = true;
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
      setFinishedTasks([...finishedTasks, taskToMove]);
    }
  };

  const moveToTasks = (taskId: number) => {
    const taskToMove = finishedTasks.find((task) => task.id === taskId);
    if (taskToMove) {
      taskToMove.isFinished = false;
      const updatedFinishedTasks = finishedTasks.filter(
        (task) => task.id !== taskId
      );
      setFinishedTasks(updatedFinishedTasks);
      setTasks([...tasks, taskToMove]);
    }
  };

  return (
    <div className="to-do-container">
      <Input setTask={addTask} />
      <div className="flex-container">
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          moveToFinished={moveToFinished}
          moveToTasks={moveToTasks}
        />
        <Finished
          tasks={finishedTasks}
          deleteTask={deleteFinishedTask}
          moveToTasks={moveToTasks}
          moveToFinished={moveToFinished}
        />
      </div>
    </div>
  );
}

export default App;
