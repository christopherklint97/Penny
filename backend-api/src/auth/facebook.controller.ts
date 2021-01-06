import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('facebook')
export class FacebookController {
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
