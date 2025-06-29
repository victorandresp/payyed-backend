import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async logIn(email: string, password: string) {
    console.log(password);
    const user = await this.authRepository.emailExists(email);
    if (!user) {
      throw new NotFoundException('User does not exists');
    }
    return {
      accessToken: '',
      user
    };
  }
}
