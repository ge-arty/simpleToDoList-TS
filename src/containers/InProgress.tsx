import React from "react";
import Task from "../components/Task";
import { TasksContainer, ContainerTitle } from "../styles/styles";

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

interface TasksProps {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
  moveTask: (taskId: number, status: TaskStatus) => void;
}

export default function InProgress(props: TasksProps): JSX.Element {
  const { tasks, deleteTask, moveTask } = props;

  return (
    <TasksContainer>
      <ContainerTitle>In Progress!</ContainerTitle>
      {tasks.length > 0 &&
        tasks.map((task) => {
          if (task.status === TaskStatus.InProgress) {
            return (
              <Task
                key={task.id + task.task}
                task={task}
                deleteTask={deleteTask}
                moveTask={moveTask}
              />
            );
          }
          return null;
        })}
    </TasksContainer>
  );
}
