import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('google')
export class GoogleController {
  @Get()
  authenicate() {
    return;
  }

  @Get('callback')
  @Redirect('/')
  handleCallback() {
    return;
  }
}
