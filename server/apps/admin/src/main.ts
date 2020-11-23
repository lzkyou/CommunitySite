import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle('Community后台管理API')
    .setDescription('后台管理API接口测试文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('admin API Listening in http://localhost:3000/api-docs');

}
bootstrap();
