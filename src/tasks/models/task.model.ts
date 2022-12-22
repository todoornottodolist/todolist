import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Task {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: false })
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column()
  desc?: string;

  @Field()
  @Column({ default: false })
  isDone: boolean;
}
