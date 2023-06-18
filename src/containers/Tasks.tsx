import Task from "../components/Task";

interface Task {
  id: number;
  task: string;
  isFinished: boolean;
}

interface TasksProps {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
  moveToFinished: (taskId: number) => void;
  moveToTasks: (taskId: number) => void;
}

export default function Tasks(props: TasksProps): JSX.Element {
  const { tasks, deleteTask, moveToFinished, moveToTasks } = props;

  return (
    <div className="tasks-container">
      <h1>Need to do!</h1>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id + task.task}
            task={task}
            deleteTask={deleteTask}
            moveToTasks={moveToTasks}
            moveToFinished={moveToFinished}
          />
        ))
      ) : (
        <p className="empty-msge">No tasks found.</p>
      )}
    </div>
  );
}
