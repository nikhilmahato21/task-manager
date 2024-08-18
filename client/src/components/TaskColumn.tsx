import { Form, Link, useNavigate } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";

type TaskColumnProps = {
  title: string;
  tasks: Array<{
    _id: string;
    title: string;
    description: string;
    deadline: Date;
    priority: string;
    status: string;
  }>;
  color: string;
  borderColor: string;
};

const TaskColumn: React.FC<TaskColumnProps> = ({
  title,
  tasks,
  color,
  borderColor,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${
        tasks.length === 0 && "hidden"
      } px-2 py-2 rounded-md bg-gray-200 h-full `}
    >
      <div
        className={`border-b-4 ${borderColor} flex mb-2 items-center justify-center gap-2`}
      >
        <span
          className={`h-2 w-2 p-1 mb-3 rounded-full inline-block  ${color}`}
        ></span>
        <span className={`text-xl font-bold mb-4 `}>{title}</span>
        <span className="bg-gray-100 flex justify-center items-center font-semibold  h-6 w-6 mb-3  rounded-full text-gray-500">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-6">
        {tasks.map((task) => (
          <div
          data-tip="hello"
            onClick={() => navigate(`task-details/${task._id}`)}
            key={task._id}
            className="p-4  bg-white shadow rounded-md hover:border hover:border-black"
          >
            <div className="flex justify-between">
              <span
                className={`text-sm  font-light p-1  rounded-md capitalize  ${
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
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <HiDotsVertical />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content text-slate-700 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg"
                >
                  <li className="text-slate-900 font-normal">
                    <Link to={`/task/${task._id}`}>edit</Link>
                  </li>
                  <li className="text-slate-900 font-normal">
                    <a>
                      <Form method="post" action={`../delete-job/${task._id}`}>
                        <button>delete</button>
                      </Form>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-2">{task.title}</h3>
            <p className="text-gray-700 text-sm font-semibold mt-2 pb-5">
              {task.description}
            </p>
            <div className="flex justify-between">
              <p className="text-slate-800 font-bold">
                {" "}
                deadline :{" "}
                <span className="text-gray-700 font-semibold text-sm">
                  {task.deadline ? task.deadline?.toString().split("T")[0] : ""}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
