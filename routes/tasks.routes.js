import { Router } from 'express';
import { getTask, 
    getTasks, 
    createTasks, 
    updateTask, 
    deleteTasks } from '../controllers/tasks.controller.js';

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask); // el :id sirve para señalar que es dinamico

router.post('/tasks', createTasks);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTasks);


export default router;