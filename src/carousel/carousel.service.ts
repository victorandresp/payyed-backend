import { Injectable } from '@nestjs/common';
import { CarouselRepository } from './carousel.repository';
@Injectable()
export class CarouselService {
  constructor(private readonly carouselRepository: CarouselRepository) {}

  async getCarouselImages() {
    return this.carouselRepository.getCarouselImages();
  }
}
