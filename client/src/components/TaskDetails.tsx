import axios from "axios";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_BASE_URL;
export const loader: LoaderFunction = async ({ params }) => {
  try {
    const { data } = await axios.get(`${apiUrl}/${params.id}`);
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching the task:", error);
  }

  return redirect("/");
};

const TaskDetails = () => {
  const task: any = useLoaderData();
  console.log(task);
  return (
    <section className="w-full h-screen  ">
      <div className="flex flex-col items-center mt-10 py-10 p-6 w-full max-w-3xl mx-auto bg-white shadow-xl border rounded-lg min-w-3xl">
        <h1 className="text-2xl font-bold mb-4 capitalize">{task.title}</h1>
        <p className="text-gray-700 font-semibold mb-2">{task.description}</p>
        <div className="flex justify-between w-full mt-4">
          <span
            className={`text-sm font-semibold py-1 px-2 rounded ${
              task.status === "expired"
                ? " text-red-700 bg-red-100"
                : task.status === "done"
                ? " text-green-700 bg-green-100"
                : task.priority === "high"
                ? "text-red-500 bg-red-100"
                : task.priority === "low"
                ? " text-amber-700 bg-amber-100"
                : task.priority === "medium"
                ? " text-sky-700 bg-sky-100"
                : ""
            }`}
          >
            {task.status === "expired"
              ? "expired❗"
              : task.status === "done"
              ? "completed"
              : task.priority}
          </span>
          <span
            className={`text-sm font-semibold py-1 px-2 rounded  ${
              task.status === "done"
                ? "  bg-white"
                : task.status === "todo"
                ? " text-blue-700 bg-blue-100"
                : task.status === "inProgress"
                ? "text-amber-500 bg-amber-100"
                : ""
            }`}
          >
            {task.status === "done" ? "" : task.status}
          </span>
        </div>
        <div className="w-full mt-2 text-left">
          <p className="text-slate-800 font-bold">
            {" "}
            deadline :{" "}
            <span className="text-gray-700 font-semibold text-sm">
              {task.deadline ? task.deadline?.toString().split("T")[0] : ""}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;
