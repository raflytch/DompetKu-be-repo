import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvironmentService } from './app/config/environment/environment.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const environmentService = app.get(EnvironmentService);

  const port = environmentService.port;

  await app.listen(port);

  console.log(`Application running on: http://localhost:${port}`);
}
bootstrap();
