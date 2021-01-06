import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GoogleController } from './google.controller';
import { UserModule } from 'src/users/users.module';
import { GoogleService } from './google.service';

@Module({
  imports: [UserModule],
  controllers: [GoogleController],
  providers: [GoogleService, PrismaService],
  exports: [GoogleService],
})
export class AuthModule {}
