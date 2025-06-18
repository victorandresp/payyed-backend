import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthRepository } from './auth.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthResolver, AuthRepository]
})
export class AuthModule {}
