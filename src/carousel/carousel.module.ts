import { Module } from '@nestjs/common';
import { CarouselService } from './carousel.service';
import { Carousel, CarouselSchema } from './carousel.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Carousel.name, schema: CarouselSchema }])
  ],
  providers: [CarouselService]
})
export class CarouselModule {}
