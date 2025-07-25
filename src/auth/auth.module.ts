import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { JwtStrategy } from '../jwt/jwt.strategy';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthRepository } from './auth.repository';
import { UserModule } from 'src/user/user.module';
import { GqlAuthGuard } from './auth.guard';
@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: config.get<string>('JWT_EXPIRE_TIME') }
      }),
      inject: [ConfigService]
    })
  ],
  providers: [
    AuthService,
    AuthResolver,
    AuthRepository,
    JwtStrategy,
    GqlAuthGuard
  ],
  exports: [GqlAuthGuard]
})
export class AuthModule {}
