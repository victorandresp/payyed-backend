import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthRepository } from './auth.repository';

@Module({
  providers: [AuthService, AuthResolver, AuthRepository]
})
export class AuthModule {}
