import Task from "../components/Task";

interface Task {
  id: number;
  task: string;
  isFinished: boolean;
}

interface FinishedProps {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
  moveToTasks: (taskId: number) => void;
  moveToFinished: (taskId: number) => void;
}

export default function Finished(props: FinishedProps): JSX.Element {
  const { tasks, deleteTask, moveToTasks, moveToFinished } = props;

  return (
    <div className="finished-container">
      <h1>Finished</h1>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            moveToTasks={moveToTasks}
            moveToFinished={moveToFinished}
          />
        ))
      ) : (
        <p className="empty-msge">You haven't finished any tasks yet.</p>
      )}
    </div>
  );
}
