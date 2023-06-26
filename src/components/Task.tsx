interface TaskProps {
  task: {
    id: number;
    task: string;
    isFinished: boolean;
  };
  deleteTask: (taskId: number) => void;

  moveTask: (taskId: number, isFinished: boolean) => void;
}

export default function Task(props: TaskProps): JSX.Element {
  const { task, deleteTask, moveTask } = props;

  return (
    <div className="task-container">
      <p>
        {task.id}.{task.task}
      </p>
      <div className="task-btn__wrapper">
        <button
          className="task-btn__remove"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button onClick={() => moveTask(task.id, task.isFinished)}>
          {task.isFinished ? "to Tasks" : "to Finished"}
        </button>
      </div>
    </div>
  );
}
