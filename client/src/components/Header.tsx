import { useEffect, useState } from "react";
import { useTasks } from "../utils/taskContext";

import { FiFilter } from "react-icons/fi";

const Header: React.FC = () => {
  const { fetchTasks } = useTasks();
  const [status, setStatus] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    fetchTasks("", search);
  };
  const handleFilter = () => {
    fetchTasks(status);
  };
  useEffect(() => {
    handleFilter();
  }, [status]);
  useEffect(() => {
    handleSearch();
  }, [search]);
  return (
    <header className=" p-4 text-white bg-gray-100 m-4 shadow-lg rounded-lg flex justify-between">
      <div className="w-full   ">
        <input
          type="text"
          placeholder="Search Tasks..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="w-96 shadow-md p-2 py-4 rounded-full text-slate-700 font-semibold text-sm"
        />
      </div>
      <div>
        <select
          className=" p-2 text-slate-700 font-semibold text-sm border  border-gray-400 rounded-md"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);

            // Call handleFilter if needed
          }}
        >
          <option className="text-gray-600" value="">
           
          <FiFilter size={20} className="inline-block mr-2" />  Filter
          </option>
          <option className="text-gray-600" value="">
            All
          </option>
          <option className="text-gray-600" value="todo">
            To Do
          </option>
          <option className="text-gray-600" value="inProgress">
            In Progress
          </option>
          <option className="text-gray-600" value="done">
            Done
          </option>
          <option className="text-gray-600" value="expired">
            Expired
          </option>
        </select>
      </div>
    </header>
  );
};

export default Header;
