import { Resolver, Query } from '@nestjs/graphql';
import { CarouselType } from './carousel.types';
import { CarouselService } from './carousel.service';
import { Authenticated } from '../auth/auth.decorator';
@Resolver(() => CarouselType)
export class CarouselResolver {
  constructor(private readonly carouselService: CarouselService) {}

  @Query(() => [CarouselType])
  @Authenticated()
  async getCarouselImages() {
    return this.carouselService.getCarouselImages();
  }
}
