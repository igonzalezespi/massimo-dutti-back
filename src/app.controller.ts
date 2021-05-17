import { Controller, Get, Req, Post, Body, UseGuards, Query } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { ShipsService } from './ships/ships.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService,
    private usersService: UsersService,
    private shipsService: ShipsService) { }

  @Post('auth/register')
  async register(@Req() req) {
    await this.usersService.add(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() body) {
    return this.authService.login(body.username);
  }

  @UseGuards(JwtAuthGuard)
  @Get('ships')
  ships(@Query() { page }) {
    return this.shipsService.find(page);
  }
}