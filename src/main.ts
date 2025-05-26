import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvironmentService } from './app/config/environment/environment.service';
import { TransformerInterceptor } from 'app/core/interceptors/transformer.interceptor';
import { HttpExceptionFilter } from 'app/core/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const environmentService = app.get(EnvironmentService);

  const port = environmentService.port;

  // Set global Interceptor and Exception Filter
  app.useGlobalInterceptors(new TransformerInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(port);

  console.log(`Application running on: http://localhost:${port}`);
}
bootstrap();
