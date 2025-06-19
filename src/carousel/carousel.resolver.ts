import { Resolver, Query } from '@nestjs/graphql';
import { CarouselType } from './carousel.types';
import { CarouselService } from './carousel.service';
@Resolver(() => CarouselType)
export class CarouselResolver {
  constructor(private readonly carouselService: CarouselService) {}

  @Query(() => [CarouselType])
  async getCarouselImages() {
    return this.carouselService.getCarouselImages();
  }
}
