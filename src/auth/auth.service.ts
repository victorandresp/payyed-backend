import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  BadRequestException
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { SignInInput } from './auth.types';
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
      throw new UnauthorizedException('Email or password is invalid');
    }

    return {
      accessToken: '',
      user
    };
  }

  signIn(signInData: SignInInput) {
    if (
      !signInData ||
      !signInData.firstName ||
      !signInData.lastName ||
      !signInData.email
    ) {
      throw new BadRequestException('Invalid data');
    }
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(
      signInData.password
    );
    if (!isValidPassword) throw new BadRequestException('Weak Password');
    return {
      firstName: 'Victor',
      lastName: 'Test',
      password: 'test123',
      email: 'test@test.com'
    };
  }
}
