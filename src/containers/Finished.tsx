import Task from "../components/Task";

interface Task {
  id: number;
  task: string;
  isFinished: boolean;
}

interface FinishedProps {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
  moveTask: (taskId: number, isFinished: boolean) => void;
}

export default function Finished(props: FinishedProps): JSX.Element {
  const { tasks, deleteTask, moveTask } = props;

  return (
    <div
      style={tasks.length !== 0 ? { minHeight: "526px" } : { minHeight: "0px" }}
      className="finished-container"
    >
      <h1>Finished</h1>
      {tasks.length > 0 &&
        tasks.map((task) => {
          if (task.isFinished) {
            return (
              <Task
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                moveTask={moveTask}
              />
            );
          } else return null;
        })}
    </div>
  );
}
