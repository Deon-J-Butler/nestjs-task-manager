import { Repository } from 'typeorm';
import { CustomRepository } from '../database/typeorm-ex.decorator';
import { Task } from './task.entity';

@CustomRepository(Task)
export class TasksRepository extends Repository<Task> {}
