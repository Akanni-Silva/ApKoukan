/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { AuthService } from '../services/auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UsuarioLogin } from '../entities/usuarioLogin.entity';

@ApiTags('Usuariologin')
@Controller('/usuarios')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: UsuarioLogin })
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('/logar')
  login(@Request() req): Promise<any> {
    return this.authService.login(req.user);
  }
}
