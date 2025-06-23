import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Types } from 'mongoose';

export type CarouselDocument = HydratedDocument<Carousel>;
@Schema()
export class Carousel {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subtitle: string;

  @Prop({ required: true })
  orientation: string;

  @Prop({ required: true })
  firstButton: string;

  @Prop({ required: true })
  secondButton: string;

  @Prop({ required: true })
  path: string;
}
export const CarouselSchema = SchemaFactory.createForClass(Carousel);
