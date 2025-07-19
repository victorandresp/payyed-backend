import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async logIn(email: string, password: string) {
    console.log(password);
    const user = await this.authRepository.emailExists(email);
    if (!user) {
      throw new NotFoundException('User does not exists');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new UnauthorizedException('Email or password invalid');
    }

    return {
      accessToken: '',
      user
    };
  }
}
