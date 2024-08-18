import { useTasks } from "../utils/taskContext";
import TaskColumn from "./TaskColumn";

const RightSideBar = () => {
  const { tasks } = useTasks();
   

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TaskColumn
          title="To Do"
          tasks={tasks.filter((task) => task.status === "todo")}
          color="bg-purple-500"
          borderColor="border-purple-400"
        />
        <TaskColumn
          title="On Progress"
          tasks={tasks.filter((task) => task.status === "inProgress")}
          color="bg-orange-500"
          borderColor="border-orange-400"
        />
        <TaskColumn
          title="Done"
          tasks={tasks.filter((task) => task.status === "done")}
          color="bg-green-300"
          borderColor="border-green-400"
        />
        <TaskColumn
          title="Expired"
          tasks={tasks.filter((task) => task.status === "expired")}
          color="text-red-400"
          borderColor="border-red-400"
        />
      </div>
    </div>
  );
};

export default RightSideBar;
