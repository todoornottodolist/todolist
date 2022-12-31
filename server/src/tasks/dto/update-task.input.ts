import { Field, ID, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { CreateTaskInput } from './create-task.input';

@InputType()
export class UpdateTaskInput extends CreateTaskInput {
  @Field(() => ID)
  id: number;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  isDone?: boolean;
}
