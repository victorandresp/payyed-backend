import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,
  ConflictException
} from '@nestjs/common';
import { User } from 'src/user/user.schema';
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

    if (!user.isActive) {
      throw new UnauthorizedException('User is not Active in the platform.');
    }

    return {
      accessToken: '',
      user
    };
  }

  async signIn(signInData: SignInInput): Promise<User> {
    if (
      !signInData ||
      !signInData.firstName ||
      !signInData.lastName ||
      !signInData.email
    ) {
      throw new BadRequestException('Invalid data.');
    }

    const emailExists = await this.authRepository.emailExists(signInData.email);
    if (emailExists) throw new ConflictException('User already exists.');

    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(
      signInData.password
    );

    if (!isValidPassword) throw new BadRequestException('Weak Password.');

    return this.authRepository.saveUser(signInData);
  }
}
