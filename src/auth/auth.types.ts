import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/user/user.types';
@ArgsType()
export class LogInArgs {
  @Field()
  email: string;

  @Field()
  password: string;
}
@ObjectType()
export class LogInOutput {
  @Field()
  accessToken: string;

  @Field(() => UserType)
  user: UserType;
}

@InputType()
export class SignInInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
