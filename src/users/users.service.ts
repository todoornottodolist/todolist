import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  // constructor(
  //   @InjectRepository(User)
  //   private readonly usersRepository: Repository<User>,
  // ) {}

  private readonly users: User[] = [
    {
      id: 1,
      email: 'email1',
      password: 'passwd1',
      displayName: 'jyu1',
    },
    {
      id: 2,
      email: 'email2',
      password: 'passwd2',
      displayName: 'jyu2',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
    // return this.usersRepository.findOneBy({ email: email });
  }
}
