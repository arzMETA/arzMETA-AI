import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import fs from 'fs';
import { HttpExceptionFilter } from './httpException.filter';
import expressBasicAuth from 'express-basic-auth';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
declare const module: any;

async function bootstrap() {
  let app;

  const prod: boolean = process.env.NODE_ENV === 'production';

  if (prod) {
    app = await NestFactory.create(AppModule);
  } else {
    app = await NestFactory.create(AppModule);
  }

  app.use(
    ['/docs', '/docs-json'],
    expressBasicAuth({
      challenge: true,
      users: { [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('[arzMETA] arzMETA API')
    .setDescription('[arzMETA] arzMETA API')
    .addCookieAuth('connect.sid')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(cookieParser());

  const NANO_SEC_IN_A_DAY = 86400000;
  const maxAge = 0.2 * NANO_SEC_IN_A_DAY;

  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      // secret: process.env.COOKIE_SECRET,
      secret: 'secret',
      cookie: {
        maxAge: maxAge,
        httpOnly: true,
        secure: false,
        domain: prod ? process.env.DOMAIN : undefined,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));

  const port = process.env.ACCOUNT_SERVER || 3730;
  await app.listen(port);
  console.info(`process.env.NODE_ENV : ${process.env.NODE_ENV}`);
  console.info(`Express application started on port : ${port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
