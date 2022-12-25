import { NotFoundException } from '@nestjs/common';
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
    const task = await this.tasksService.findTaskById(id);
    if (!task) {
      throw new NotFoundException(id);
    }
    return task;
  }

  @Mutation(() => Task)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    const task = await this.tasksService.createTask(createTaskInput);
    return task;
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    const task = await this.tasksService.updateTask(updateTaskInput);
    if (!task) {
      throw new NotFoundException(updateTaskInput.id);
    }
    return task;
  }
}
