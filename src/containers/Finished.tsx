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

interface FinishedProps {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
}

export default function Finished(props: FinishedProps): JSX.Element {
  const { tasks, deleteTask } = props;

  return (
    <TasksContainer>
      <ContainerTitle>Finished!</ContainerTitle>
      {tasks.length > 0 &&
        tasks.map((task) => {
          if (task.status === TaskStatus.Finished) {
            return (
              <Task
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                moveTask={() => {}}
              />
            );
          } else return null;
        })}
    </TasksContainer>
  );
}
