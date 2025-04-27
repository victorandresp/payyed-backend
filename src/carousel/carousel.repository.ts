import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Carousel, CarouselDocument } from './carousel.schema';

@Injectable()
export class CarouselRepository {
  constructor(
    @InjectModel(Carousel.name)
    private readonly carouselModel: Model<CarouselDocument>
  ) {}

  async getCarouselImages(): Promise<Carousel[]> {
    return await this.carouselModel.find().exec();
  }
}
