import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById,updateTask } from "../controllers/taskControllers";
import { checkExpiredTasks } from "../middleware/checkExpiredTasks";

const router = Router();

router.use(checkExpiredTasks);

router.get("/", getAllTasks);
router.post("/",createTask);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

// router.get('/status', getTasksByStatus);

export default router;