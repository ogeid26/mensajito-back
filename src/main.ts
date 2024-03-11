import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Mensajitos API')
  .setDescription("Aca podrás ver cómo se crean usuarios, mensajitos, etc.")
  .setVersion('beta')
  .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
