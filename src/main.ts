import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as mongoSanitize from 'express-mongo-sanitize';
import { makeQueryWritable } from './middlewares/makeQueryWritable.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'production') {
    app.enableCors({
      origin: [process.env.FRONTEND_URL],
      credentials: true
    });
    app.use(helmet());
  }
  app.use(makeQueryWritable); // Middleware for modify query before use mongoSanitize
  app.use(mongoSanitize());
  await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
