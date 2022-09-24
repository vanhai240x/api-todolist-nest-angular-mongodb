import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Todo list')
    .setDescription('The todo API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  // Get all router in app
  // const server = app.getHttpServer();
  // const router = server._events.request._router;
  // const availableRoutes: [] = router.stack
  //   .map((layer) => {
  //     if (layer.route) {
  //       return {
  //         route: {
  //           path: layer.route?.path,
  //           method: layer.route?.stack[0].method,
  //         },
  //       };
  //     }
  //   })
  //   .filter((item) => item !== undefined);
  // console.log(availableRoutes);
}
bootstrap();
