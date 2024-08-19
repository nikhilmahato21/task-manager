import { useTasks } from "../utils/taskContext";
type LeftSideBarProps = {
  isOpen: boolean;
};
const LeftSideBar = ({ isOpen }: LeftSideBarProps) => {
  const { totalTasks, expiredTasks } = useTasks();

  return (
    <div className={`h-full  bg-gray-100 p-6 ${isOpen ? " h-screen absolute md:relative z-30" : "hidden "}`}>
      {/* toggle Sidebar */}

      {/* main content */}
      <button
        className=" bg-slate-800  text-white rounded-full w-60 p-3 m-1"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_3"
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          } else {
            console.error("Modal element not found");
          }
        }}
      >
        + Add Task
      </button>

      <aside className="w-64 h-full bg-gray-100 p-4 ">
        <ul>
          <li className="mb-4 shadow-md">
            <div className=" flex flex-col p-2 h-40 bg-gray-200 rounded-md">
              <span className="h-12 w-12 flex justify-center items-center  bg-red-600 rounded-full ">
                <img
                  src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1724000798/icons8-expired-50_1_ttxv7x.png"
                  alt=""
                  className="h-6 w-6 object-cover"
                />
              </span>
              <span className="text-gray-600 font-semibold">Expired</span>
              <span className="font-bold text-2xl">{expiredTasks.length}</span>
            </div>
          </li>
          <li className="mb-4 shadow-md">
            <div className="flex flex-col p-2 h-40 bg-gray-200 rounded-md">
              <span className="h-12 w-12 flex justify-center items-center  bg-rose-300 rounded-full ">
                {" "}
                <img
                  src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1724000933/icons8-suitcase-64_1_by8phb.png"
                  alt="suitcase"
                  className="h-6 w-6 object-cover"
                />{" "}
              </span>
              <span className="text-gray-600 font-semibold">
                All Active Tasks
              </span>
              <span className="font-bold text-2xl">{totalTasks.length}</span>
            </div>
          </li>
          <li className="shadow-md">
            <div className="flex flex-col p-2  h-40 bg-gray-200 rounded-md">
              <span className="h-12 w-12 flex justify-center items-center  bg-sky-400 rounded-full ">
                <img
                  src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1724000933/icons8-clock-50_1_vgxe4h.png"
                  alt="clock"
                  className="h-6 w-6 object-cover"
                />
              </span>
              <span className="text-gray-600  font-semibold">Completed</span>
              <span className="font-bold text-2xl">
                {totalTasks.filter((task) => task.status === "done").length}/
                <span className="text-xl font-semibold">
                  {totalTasks.length}
                </span>
              </span>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default LeftSideBar;
