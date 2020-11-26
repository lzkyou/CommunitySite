import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AdminModule);
  app.enableCors()
  app.useStaticAssets('uploads', {
    prefix: '/uploads'
  })

  const options = new DocumentBuilder()
    .setTitle('Community后台管理API')
    .setDescription('后台管理API接口测试文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.ADMIN_PORT || 3001
  await app.listen(port);
  console.log(`admin API run on Port ${port}!`);
  console.log(`admin API Doc：http://localhost:${port}/api-docs`);

}
bootstrap();
