// auth.decorator.ts
import { applyDecorators, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './auth.guard';

export function Authenticated() {
  return applyDecorators(UseGuards(GqlAuthGuard));
}
