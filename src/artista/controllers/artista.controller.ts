import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ArtistaService } from '../services/artista.service';
import { verArtistaDto } from '../../dto/artistaDto/verArtista.dto';
import { atualizarArtistaDto } from '../../dto/artistaDto/atualizarArtista.dto';
import { criarArtistaDto } from '../../dto/artistaDto/criarArtista.dto';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Artista')
@UseGuards(JwtAuthGuard)
@Controller('/artista')
@ApiBearerAuth()
export class ArtistaController {
  constructor(private readonly artistaService: ArtistaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<verArtistaDto[]> {
    return this.artistaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<verArtistaDto> {
    return this.artistaService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<verArtistaDto[]> {
    return this.artistaService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() artista: criarArtistaDto): Promise<verArtistaDto> {
    return this.artistaService.create(artista);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() artista: atualizarArtistaDto): Promise<verArtistaDto> {
    return this.artistaService.update(artista);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.artistaService.delete(id);
  }
}
