import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskInput } from './dto/task.input';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';

@Resolver()
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query((returns) => Task)
  async getTask(@Args('id') id: number): Promise<Task> {
    const task = await this.tasksService.findTaskById(id);
    if (!task) {
      throw new NotFoundException(id);
    }
    return task;
  }

  @Mutation((returns) => Task)
  async addTask(@Args('taskInput') taskInput: TaskInput): Promise<Task> {
    const task = await this.tasksService.createTask(taskInput);
    return task;
  }
}
