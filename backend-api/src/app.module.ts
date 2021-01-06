import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  PassportGoogle,
  PassportGoogleCallback,
} from './middleware/passport.middleware';
import { PrismaService } from './prisma.service';
import { UserModule } from './users/users.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})

// Declaring middleware
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PassportGoogle).forRoutes('/auth/google');
    consumer.apply(PassportGoogleCallback).forRoutes('auth/google/callback');
  }
}
