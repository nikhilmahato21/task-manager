
import { useEffect, useState } from "react";

import axios from "axios";

const LeftSideBar = () => {
  
interface Task {
    _id: string;
    title: string;
    description: string;
    status: "todo" | "inProgress" | "done" | "timeout" | "expired";
    priority: "low" | "medium" | "high";
    deadline: Date;
  }
  
    const [tasks, setTasks] = useState<Task[]>([]);
    const [expired, setExpired] = useState<Task[]>([]);
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    const fetchExpiredTasks = async () => {
      try {
        const response = await axios.get(`/tasks?status=expired`);
        setExpired(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
  
    useEffect(() => {
      fetchExpiredTasks();
      fetchTasks();
    }, []);
  

 
    
 
  return (
    <div className="h-full bg-gray-100 p-6">
      <button
        className=" bg-slate-800 text-white rounded-full w-60 p-3 m-1"
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
      {/* Left Sidebar */}

      <aside className="w-64 h-full bg-gray-100 p-4 ">
        <ul>
          <li className="mb-4 shadow-md">
            <div className=" flex flex-col p-2 h-40 bg-gray-200 rounded-md">
              <span></span>
              <span className="text-gray-600 font-semibold">Expired</span>
              <span className="font-bold text-2xl">
                {expired.length}
              </span>
            </div>
          </li>
          <li className="mb-4 shadow-md">
            <div className="flex flex-col p-2 h-40 bg-gray-200 rounded-md">
              <span></span>
              <span className="text-gray-600 font-semibold">All Active Tasks</span>
              <span className="font-bold text-2xl">{tasks.length}</span>
            </div>
          </li>
          <li className="shadow-md">
            <div className="flex flex-col p-2  h-40 bg-gray-200 rounded-md">
              <span></span>
              <span className="text-gray-600  font-semibold">Completed</span>
              <span className="font-bold text-2xl">
                {tasks.filter((task) => task.status === "done").length}/
                <span className="text-xl font-semibold">{tasks.length}</span>
              </span>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default LeftSideBar;
