import axios from "axios";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const { data } = await axios.get(`/tasks/${params.id}`);
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
    <div>TaskDetails</div>
  )
}

export default TaskDetails