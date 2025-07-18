import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>
  ) {}
  getUser() {
    return {
      id: 'idd',
      firstName: 'victor',
      lastName: 'andres',
      email: 'victorandres@gmail.com',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
}
