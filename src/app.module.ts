import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: './.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI as string),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
