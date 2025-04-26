import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CarouselType {
  @Field(() => ID)
  _id: string;

  @Field()
  title: string;

  @Field()
  subtitle: string;

  @Field()
  orientation: string;

  @Field()
  firstButton: string;

  @Field()
  secondButton: string;
}
