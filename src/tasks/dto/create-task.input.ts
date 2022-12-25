import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, MaxLength } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @MaxLength(31)
  title?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @MaxLength(255)
  desc?: string;
}
