import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import {
  CreateUserDto,
  UpdateUserDto,
  ListAllEntities,
} from '../users/dto/users.dto';

@Controller('google')
export class GoogleController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all users (limit: ${query.limit} items)`;
  }
}
