import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceConfig } from './microserviceConfig';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  // app.connectMicroservice(microserviceConfig);
  // await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
