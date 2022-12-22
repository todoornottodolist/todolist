import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskInput } from './dto/task.input';
import { Task } from './models/task.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  async findTaskById(id: number): Promise<Task> {
    return this.tasksRepository.findOneBy({ id: id });
  }

  async createTask(taskInput: TaskInput): Promise<Task> {
    const task = new Task();
    task.title = taskInput.title;
    task.desc = taskInput.desc;
    return this.tasksRepository.save(task);
  }
}
