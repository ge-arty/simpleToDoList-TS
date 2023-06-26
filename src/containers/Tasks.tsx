import Task from "../components/Task";

interface Task {
  id: number;
  task: string;
  isFinished: boolean;
}

interface TasksProps {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
  moveTask: (taskId: number, isFinished: boolean) => void;
}

export default function Tasks(props: TasksProps): JSX.Element {
  const { tasks, deleteTask, moveTask } = props;

  return (
    <div
      style={tasks.length !== 0 ? { minHeight: "526px" } : { minHeight: "0px" }}
      className="tasks-container"
    >
      <h1>Need to do!</h1>
      {tasks.length > 0 &&
        tasks.map((task) => {
          if (task.isFinished === false) {
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
    </div>
  );
}
