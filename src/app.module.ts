import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
      // envFilePath: './.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI as string),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
