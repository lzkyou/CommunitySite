import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle('Community前台管理API')
    .setDescription('前台API接口测试文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.SERVER_PORT || 3000
  await app.listen(port);
  console.log(`server API run on Port ${port}!`);
  console.log(`server API Doc：http://localhost:${port}/api-docs`);
}
bootstrap();
