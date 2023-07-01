import React from "react";
import {
  BtnDelete,
  BtnMove,
  TaskComponent,
  TaskComponentBtnWrapper,
} from "../styles/styles";

enum TaskStatus {
  ToDo = "ToDo",
  InProgress = "InProgress",
  Finished = "Finished",
}

interface TaskProps {
  task: {
    id: number;
    task: string;
    status: TaskStatus;
  };
  deleteTask: (taskId: number) => void;
  moveTask: (taskId: number, status: TaskStatus) => void;
}

function Task(props: TaskProps): JSX.Element {
  const { task, deleteTask, moveTask } = props;

  function getBackgroundColor(status: TaskStatus): string {
    switch (status) {
      case TaskStatus.ToDo:
        return "blue";
      case TaskStatus.InProgress:
        return "#CAB522";
      case TaskStatus.Finished:
        return "green";
      default:
        return "black";
    }
  }

  return (
    <TaskComponent $background={getBackgroundColor(task.status)}>
      <p>
        {task.id}.{task.task}
      </p>
      <TaskComponentBtnWrapper>
        <BtnDelete onClick={() => deleteTask(task.id)}>Delete</BtnDelete>
        {task.status !== TaskStatus.Finished && (
          <BtnMove onClick={() => moveTask(task.id, task.status)}>
            {task.status === TaskStatus.ToDo ? "Start" : "Finished"}
          </BtnMove>
        )}
      </TaskComponentBtnWrapper>
    </TaskComponent>
  );
}

export default React.memo(Task);
