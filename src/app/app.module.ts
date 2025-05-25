import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentModule } from './config/environment/environment.module';
import { PrismaModule } from './config/prisma/prisma.module';
import { UploadModule } from './config/upload/upload.module';

@Module({
  imports: [EnvironmentModule, PrismaModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
