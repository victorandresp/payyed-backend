import { Resolver, Query, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LogInArgs, LogInOutput } from './auth.types';
@Resolver(() => LogInOutput)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Query(() => LogInOutput)
  logIn(@Args() args: LogInArgs) {
    const { email, password } = args;
    return this.authService.logIn(email, password);
  }
}
