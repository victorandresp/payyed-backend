import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LogInArgs, LogInOutput, SignInInput } from './auth.types';
import { UserType } from '../user/user.types';
@Resolver(() => LogInOutput)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => LogInOutput) // TODO: pass to mutation
  logIn(@Args() args: LogInArgs) {
    const { email, password } = args;
    return this.authService.logIn(email, password);
  }

  @Mutation(() => UserType)
  signIn(@Args('input') input: SignInInput) {
    return this.authService.signIn(input);
  }
}
