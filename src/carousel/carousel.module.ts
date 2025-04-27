import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Carousel, CarouselSchema } from './carousel.schema';
import { CarouselResolver } from './carousel.resolver';
import { CarouselService } from './carousel.service';
import { CarouselRepository } from './carousel.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Carousel.name, schema: CarouselSchema }])
  ],
  providers: [CarouselResolver, CarouselService, CarouselRepository]
})
export class CarouselModule {}
