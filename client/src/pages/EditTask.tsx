import {
  ActionFunctionArgs,
  Form,
  LoaderFunction,
  useLoaderData,
} from "react-router-dom";
import axios from "axios";
import { redirect } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import toast from "react-hot-toast";
import { useTasks } from "../utils/taskContext";
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

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.put(`/tasks/${params.id}`, data);
    toast.success("Task Updated! ");
    return redirect("/");
  } catch (error) {
    return error;
  }
};
const EditTask = () => {
  const task: any = useLoaderData();
  const { fetchExpiredtasks ,fetchTotaltasks} = useTasks();

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className=" w-full max-w-3xl border-2 border-slate-600 rounded-md p-2">
        <Form method="post">
          <div className="border-b-4 mb-4 text-center flex justify-center items-center gap-1 py-3 border-slate-700 font-bold text-3xl">
            <h1>Edit Task</h1> <BsPencilSquare />
          </div>
          <div>
            <label className="block text-sm font-bold tracking-wide text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={task.title}
              className="my-1 block py-2 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-bold tracking-wide text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={task.description}
              className="my-1 block py-2 px-1 text-slate-700 font-semibold text-sm max-h-2xl  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-bold tracking-wide text-gray-700">
                Deadline
              </label>
              <input
                name="deadline"
                defaultValue={
                  task.deadline ? task.deadline.toString().split("T")[0] : ""
                }
                type="date"
                className="my-1 block py-2 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold tracking-wide text-gray-700">
                Priority
              </label>
              <select
                defaultValue={task.priority}
                name="priority"
                className="my-1 block py-3 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold tracking-wide text-gray-700">
                Status
              </label>
              <select
                defaultValue={task.status}
                name="status"
                className="my-1 block py-3 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
              >
                <option value="todo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                fetchTotaltasks();
                fetchExpiredtasks();
              }}
              type="submit"
              className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-700 hover:bg-slate-900 "
            >
              Update Task
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default EditTask;
