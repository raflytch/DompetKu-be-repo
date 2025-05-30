import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentService {
  constructor(private configService: ConfigService) {}

  // Database configuration
  get databaseUrl(): string {
    return this.configService.get<string>('DATABASE_URL') || '';
  }

  // Application configuration
  get nodeEnv(): string {
    return this.configService.get<string>('NODE_ENV') || 'development';
  }

  get port(): number {
    return this.configService.get<number>('PORT') || 3000;
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  // JWT configuration (for future authentication setup)
  get jwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET') || 'supersecret';
  }

  get jwtExpiresIn(): string {
    return this.configService.get<string>('JWT_EXPIRES_IN') || '1d';
  }

  // File upload configuration
  get imageKitPublicKey(): string {
    return this.configService.get<string>('IMAGEKIT_PUBLIC_KEY') || '';
  }

  get imageKitPrivateKey(): string {
    return this.configService.get<string>('IMAGEKIT_PRIVATE_KEY') || '';
  }

  get imageKitUrlEndpoint(): string {
    return this.configService.get<string>('IMAGEKIT_URL_ENDPOINT') || '';
  }

  // Google OAuth configuration
  get googleClientId(): string {
    return this.configService.get<string>('GOOGLE_CLIENT_ID') || '';
  }

  get googleClientSecret(): string {
    return this.configService.get<string>('GOOGLE_CLIENT_SECRET') || '';
  }
}
