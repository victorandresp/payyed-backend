import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserType } from '../user/user.type';
import { AuthService } from './auth.service';

export class AuthInput {}

@Resolver(() => UserType)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Query(() => UserType)
  logIn(@Args('email') email: string, @Args('password') password: string) {
    return this.authService.logIn(email, password);
  }
}
