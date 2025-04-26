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
  subtitle: number;

  @Prop({ required: true })
  orientation: number;

  @Prop({ required: true })
  firstButton: number;

  @Prop({ required: true })
  secondButton: number;
}

export const CarouselSchema = SchemaFactory.createForClass(Carousel);
