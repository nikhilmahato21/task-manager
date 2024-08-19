import axios from "axios";

import { ActionFunctionArgs, Form,  redirect } from "react-router-dom";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    await axios.post("/tasks", data);
    
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    } else {
      console.error("Modal element not found");
    }
    const modalOpen = document.getElementById(
      "my_modal_1"
    ) as HTMLDialogElement | null;
    if (modalOpen) {
      modalOpen.showModal();
    } else {
      console.error("Modal element not found");
    }

    return redirect("/");
  } catch (error) {
    return error;
  }
};

const TaskModal = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-3xl">
          <button
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_3"
              ) as HTMLDialogElement | null;
              if (modal) {
                modal.close();
              } else {
                console.error("Modal element not found");
              }
            }}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <Form method="post">
            <div className="border-b-4 mb-4 text-center border-slate-700 font-bold text-3xl">
              <h1>Add Task</h1>
            </div>
            <div>
              <label className="block text-sm font-bold tracking-wide text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="my-1 block py-2 px-1  border-2 w-full rounded-md text-slate-700 font-semibold text-sm border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm  font-bold tracking-wide text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                className="my-1 block py-2 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div>
                <label className="block text-sm  font-bold tracking-wide text-gray-700">
                  Deadline
                </label>
                <input
                  name="deadline"
                  type="date"
                  className="my-1 block py-2 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-bold tracking-wide text-gray-700">
                  Priority
                </label>
                <select
                  name="priority"
                  className="my-1 block py-3 px-1 text-slate-700 font-semibold text-sm  border-2 w-full rounded-md border-slate-400 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm  font-bold tracking-wide text-gray-700">
                  Status
                </label>
                <select
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
                type="submit"
                className="inline-flex justify-center py-2 px-4  shadow-sm text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-900 hover:shadow-lg "
              >
                Add Task
              </button>
            </div>
          </Form>
        </div>
      </dialog>
    </div>
  );
};

export default TaskModal;
