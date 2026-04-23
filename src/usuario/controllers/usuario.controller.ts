import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { VerUsuarioDto } from '../../dto/usuarioDto/verUsuario.dto';
import { CriarUsuarioDto } from '../../dto/usuarioDto/criarUsuario.dto';
import { AtualizarUsuarioDto } from '../../dto/usuarioDto/atualizarUsuario.dto';
import { plainToInstance } from 'class-transformer';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@Controller('/usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/all')
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<VerUsuarioDto[]> {
    const user = await this.usuarioService.findAll();

    return plainToInstance(VerUsuarioDto, user, {
      excludeExtraneousValues: true,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async findById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VerUsuarioDto> {
    const user = await this.usuarioService.findById(id);

    return plainToInstance(VerUsuarioDto, user, {
      excludeExtraneousValues: true,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  async findByNome(@Param('nome') nome: string): Promise<VerUsuarioDto[]> {
    const user = await this.usuarioService.findByNome(nome);

    return plainToInstance(VerUsuarioDto, user, {
      excludeExtraneousValues: true,
    });
  }

  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() usuario: CriarUsuarioDto): Promise<VerUsuarioDto> {
    const user = await this.usuarioService.create(usuario);

    return plainToInstance(VerUsuarioDto, user, {
      excludeExtraneousValues: true,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() usuario: AtualizarUsuarioDto): Promise<VerUsuarioDto> {
    const user = await this.usuarioService.update(usuario);

    return plainToInstance(VerUsuarioDto, user, {
      excludeExtraneousValues: true,
    });
  }
}
