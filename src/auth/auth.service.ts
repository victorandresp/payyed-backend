import { Injectable } from '@nestjs/common';
@Injectable()
export class AuthService {
  logIn(email: string, password: string) {
    return {
      firstName: `login does works! ${email} ${password}`
    };
  }
}
