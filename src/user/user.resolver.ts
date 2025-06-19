import { Resolver, Query } from '@nestjs/graphql';
import { UserType } from './user.types';
import { UserService } from './user.service';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserType)
  getUser(): UserType {
    return this.userService.getUser();
  }
}
