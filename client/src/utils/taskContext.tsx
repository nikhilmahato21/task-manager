import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Define the shape of your Task
interface Task {
  _id: string;
  title: string;
  description: string;
  status: "todo" | "inProgress" | "done" | "timeout" | "expired";
  priority: "low" | "medium" | "high";
  deadline: Date;
}
const apiUrl = import.meta.env.VITE_API_BASE_URL;
// Define the shape of the context
interface TaskContextProps {
  tasks: Task[];
  totalTasks: Task[];
  expiredTasks: Task[];
  fetchTasks: (status?: string, search?: string) => void;
  fetchTotaltasks: (status?: string, search?: string) => void;
  fetchExpiredtasks: (status?: string, search?: string) => void;
}

// Create the TaskContext
const TaskContext = createContext<TaskContextProps | undefined>(undefined);

// Create a provider component
export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [totalTasks, setTotaltasks] = useState<Task[]>([]);
  const [expiredTasks, setExpiredtasks] = useState<Task[]>([]);

  const fetchTasks = async (status?: string, search?: string) => {
    try {
      const query = new URLSearchParams();
      if (status) query.append("status", status);
      if (search) query.append("search", search);

      const response = await axios.get(`${apiUrl}?${query.toString()}`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const fetchTotaltasks = async (status?: string, search?: string) => {
    try {
      const query = new URLSearchParams();
      if (status) query.append("status", status);
      if (search) query.append("search", search);

      const response = await axios.get(`${apiUrl}?${query.toString()}`);
      setTotaltasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const fetchExpiredtasks = async (status?: string, search?: string) => {
    try {
      const query = new URLSearchParams();
      if (status) query.append("status", status);
      if (search) query.append("search", search);

      const response = await axios.get(`${apiUrl}?status=expired`);
      console.log(response.data);

      setExpiredtasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchTotaltasks();
    fetchExpiredtasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        fetchTasks,
        fetchTotaltasks,
        totalTasks,
        expiredTasks,
        fetchExpiredtasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
