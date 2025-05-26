import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { EnvironmentService } from './app/config/environment/environment.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS (penting untuk serverless/Vercel)
  app.enableCors();

  const environmentService = app.get(EnvironmentService);
  const port = environmentService.port || 3000;

  await app.listen(port);

  console.log(`Application running on: http://localhost:${port}`);
}

// Untuk local dev
if (require.main === module) {
  bootstrap();
}

// Untuk Vercel serverless
export default bootstrap;
