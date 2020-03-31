import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as fs from 'fs';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {

  // const httpsOptions = {
  //   key: fs.readFileSync('src/secrets/https/server.key'),
  //   cert: fs.readFileSync('src/secrets/https/server.crt')
  // };

  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create(AppModule, {httpsOptions});

  app.enableCors();

  app.use(helmet());

  app.use(cookieParser());

  // TODO: set up csurf: https://github.com/expressjs/csurf#csurf

  await app.listen(3000);
}
bootstrap();
