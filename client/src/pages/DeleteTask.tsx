import axios from "axios";
import toast from "react-hot-toast";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export const action = async ({ params }: ActionFunctionArgs) => {
  console.log(params);

  try {
    await axios.delete(`/tasks/${params.id}`);
    toast.success("deleted successfully")
    return redirect("/");
  } catch (error) {
    return error;
  }
};

const DeleteTask = () => {
  return <div>DeleteTask</div>;
};

export default DeleteTask;
