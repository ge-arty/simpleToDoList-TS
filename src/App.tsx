import { useState, useEffect, useCallback } from "react";
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

  // Component will Mount Data
  useEffect(() => {
    const baseTasks: Task[] = [
      { id: 1, task: "breakfast", isFinished: false },
      { id: 2, task: "coding", isFinished: false },
      { id: 3, task: "Play a Game!", isFinished: false },
      { id: 4, task: "Workout", isFinished: true },
    ];
    setTasks(baseTasks);
  }, []);

  // Adding Tasks to Do
  const addTask = (task: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      task: task,
      isFinished: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Deleting to Do task or Finished Task
  const deleteTask = useCallback((taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  // Moving Task to Finished or opposite
  const moveTask = useCallback((taskId: number, isFinished: boolean) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isFinished: !isFinished,
          };
        }
        return task;
      });
      return updatedTasks;
    });
  }, []);

  return (
    <div className="to-do-container">
      <Input setTask={addTask} />
      <div className="flex-container">
        <Tasks tasks={tasks} deleteTask={deleteTask} moveTask={moveTask} />
        <Finished tasks={tasks} deleteTask={deleteTask} moveTask={moveTask} />
      </div>
    </div>
  );
}

export default App;
