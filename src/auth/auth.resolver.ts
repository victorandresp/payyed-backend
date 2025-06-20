import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserType } from '../user/user.types';
import { AuthService } from './auth.service';
import { LogInArgs } from './auth.types';

export class AuthInput {}

@Resolver(() => UserType)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Query(() => UserType)
  logIn(@Args() args: LogInArgs) {
    const { email, password } = args;
    return this.authService.logIn(email, password);
  }
}
