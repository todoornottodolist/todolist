import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Task {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  desc?: string;

  @Field(() => Boolean)
  @Column({ default: false })
  isDone?: boolean;
}
