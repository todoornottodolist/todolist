import { ServiceUnavailableException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './models/task.model';
import { TasksService } from './tasks.service';

@Resolver()
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => Task)
  async getTask(@Args('id') id: number): Promise<Task> {
    return await this.tasksService.findTaskById(id);
  }

  @Mutation(() => Task)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    const task = await this.tasksService.createTask(createTaskInput);
    if (!task) {
      throw new ServiceUnavailableException();
    }
    return task;
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    const task = await this.tasksService.updateTask(updateTaskInput);
    if (!task) {
      throw new ServiceUnavailableException();
    }
    return task;
  }

  @Mutation(() => Boolean)
  async deleteTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<boolean> {
    return await this.tasksService.deleteTask(updateTaskInput);
  }
}
