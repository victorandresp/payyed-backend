import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class LogInArgs {
  @Field()
  email: string;

  @Field()
  password: string;
}
