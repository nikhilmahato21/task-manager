
import { Request, Response, NextFunction } from 'express';
import Task from '../models/taskModel';


export const checkExpiredTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const now = new Date();
    await Task.updateMany(
      { deadline: { $lt: now }, status: { $ne: 'expired' } },
      { $set: { status: 'expired' } }
    );
    next();
  } catch (error) {
    console.error('Failed to check expired tasks', error);
    next(error);
  }
};
