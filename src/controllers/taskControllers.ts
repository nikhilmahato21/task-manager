import { Request, Response } from 'express';
import Task from '../models/taskModel';

export const getAllTasks = async (req: Request, res: Response) => {
    const { status,search } = req.query;
   
    const filter: any = {};

    // If status is provided in the query, filter by that status
    if (status) {
      filter.status = status;
    } else {
      // If status is not provided, exclude expired tasks
      filter.status = { $ne: "expired" };
    }
    if (search) {
        filter.title = { $regex: search, $options: 'i' };
      }
  
    try {
        const tasks = await Task.find(filter);
        res.json(tasks);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error });
      }
  };


  // POST /tasks
export const createTask = async (req: Request, res: Response) => {
    try {
    
      const task = await Task.create(req.body);
      res.status(201).json({task});
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
    
  };
  
  // GET /tasks/:id
   export const getTaskById = async (req: Request, res: Response) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };


  // PUT /tasks/:id
export const updateTask = async (req: Request, res: Response) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

  export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
    const removedTask = await Task.findByIdAndDelete(id);
   res.status(200).json({ msg: "task deleted", task: removedTask }); 

    } catch (error) {

        res.status(500).json({ message: 'Server error', error });
    }
  };

