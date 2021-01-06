import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GoogleController } from './google.controller';
import { UsersService } from '../users/users.service';
import { UsersModule } from 'src/users/users.module';
import { GoogleService } from './google.service';

@Module({
  imports: [UsersModule],
  controllers: [GoogleController],
  providers: [GoogleService, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
