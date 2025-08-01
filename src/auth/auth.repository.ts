import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/user.schema';
import { SignInInput } from './auth.types';
@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {}

  async emailExists(email: string) {
    return await this.userModel.findOne({ email });
  }

  async saveUser(signInData: SignInInput): Promise<User> {
    const user = new this.userModel(signInData);
    return await user.save();
  }
}
