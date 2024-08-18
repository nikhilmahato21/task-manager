import axios from "axios";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export const action = async ({ params }: ActionFunctionArgs) => {
  try {
    await axios.delete(`/tasks/${params.id}`);
    
    return redirect("/");
  } catch (error) {
    return error;
  }
  

};

const DeleteTask = () => {
  return <div>DeleteJob</div>;
};

export default DeleteTask;
