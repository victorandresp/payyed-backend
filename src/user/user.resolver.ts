import { Resolver, Query } from '@nestjs/graphql';
import { UserType } from './user.type';
import { UserService } from './user.service';

export class UserInput {}
@Resolver(() => UserType)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserType)
  getUser(): UserType {
    return this.userService.getUser();
  }
}
