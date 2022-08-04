import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';
import { User } from '../auth/user.entity';
import { Equal } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}

  getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto, user);
  }

  async getTaskById(id: string, user: User): Promise<Task> {
    const task = await this.tasksRepository.findOne({
      where: {
        id,
        user: Equal(user),
      },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID:${id} not found`);
    }

    return task;
  }

  createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto, user);
  }

  async deleteTask(id: string, user: User): Promise<void> {
    const target = await this.tasksRepository.delete({
      id,
      user: Equal(user),
    });

    if (target.affected === 0) {
      throw new NotFoundException(`Task with ID:${id} not found`);
    }
  }

  async updateTaskStatus(
    id: string,
    status: TaskStatus,
    user: User,
  ): Promise<Task> {
    const task = await this.getTaskById(id, user);
    task.status = status;
    await this.tasksRepository.save(task);
    return task;
  }

  async updateTaskDescription(
    id: string,
    description: string,
    user: User,
  ): Promise<Task> {
    const task = await this.getTaskById(id, user);
    task.description = description;
    await this.tasksRepository.save(task);
    return task;
  }
}
