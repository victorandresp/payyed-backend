import { Resolver, Query } from '@nestjs/graphql';
import { UserType } from './user.type';

export class UserInput {}
@Resolver(() => UserType)
export class UserResolver {
  @Query(() => UserType)
  getUser(): UserType {
    return {
      id: 'id',
      name: 'victor',
      age: 27,
      createdAt: new Date()
    };
  }
}
