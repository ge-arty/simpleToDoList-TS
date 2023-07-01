import { useState, useEffect, useCallback } from "react";
import Input from "./containers/Input";
import Tasks from "./containers/Tasks";
import Finished from "./containers/Finished";
import InProgress from "./containers/InProgress";
import { FlexContainer, ToDoApp, ToDoWrapper } from "./styles/styles";
import useDetectDevice from "./hooks/useDetectDevice";

enum TaskStatus {
  ToDo = "ToDo",
  InProgress = "InProgress",
  Finished = "Finished",
}

interface Task {
  id: number;
  task: string;
  status: TaskStatus;
}

function App(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const device = useDetectDevice();

  useEffect(() => {
    const tasks: Task[] = [
      { id: 1, task: "Task 1", status: TaskStatus.ToDo },
      { id: 2, task: "Task 2", status: TaskStatus.InProgress },
      { id: 3, task: "Task 3", status: TaskStatus.Finished },
    ];
    setTasks(tasks);
  }, []);

  // Adding Tasks to Do
  const addTask = (task: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      task: task,
      status: TaskStatus.ToDo,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Deleting to Do task or Finished Task
  const deleteTask = useCallback((taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  // Moving Task to Finished or opposite
  const moveTask = useCallback((taskId: number, status: TaskStatus) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          if (status === TaskStatus.ToDo) {
            return {
              ...task,
              status: TaskStatus.InProgress,
            };
          } else if (status === TaskStatus.InProgress) {
            return {
              ...task,
              status: TaskStatus.Finished,
            };
          }
        }
        return task;
      });
      return updatedTasks;
    });
  }, []);

  return (
    <ToDoWrapper>
      <ToDoApp>
        <Input setTask={addTask} />
        <FlexContainer $setColumn={device === "mobile" ? "column" : "row"}>
          <Tasks tasks={tasks} deleteTask={deleteTask} moveTask={moveTask} />
          <InProgress
            tasks={tasks}
            deleteTask={deleteTask}
            moveTask={moveTask}
          />
          <Finished tasks={tasks} deleteTask={deleteTask} />
        </FlexContainer>
      </ToDoApp>
    </ToDoWrapper>
  );
}

export default App;
