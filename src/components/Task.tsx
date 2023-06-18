interface TaskProps {
  task: {
    id: number;
    task: string;
    isFinished: boolean;
  };
  deleteTask: (taskId: number) => void;
  moveToFinished: (taskId: number) => void;
  moveToTasks: (taskId: number) => void;
}

export default function Task(props: TaskProps): JSX.Element {
  const { task, deleteTask, moveToFinished, moveToTasks } = props;

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

        {task.isFinished ? (
          <button onClick={() => moveToTasks(task.id)}>to Tasks</button>
        ) : (
          <button
            className="task-btn__back-tasks"
            onClick={() => moveToFinished(task.id)}
          >
            Finished
          </button>
        )}
      </div>
    </div>
  );
}
