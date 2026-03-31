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
} from '@nestjs/common';
import { ArtistaService } from '../services/artista.service';
import { Artista } from './../entities/artista.entity';
@Controller('/artista')
export class ArtistaController {
  constructor(private readonly artistaService: ArtistaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Artista[]> {
    return this.artistaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Artista> {
    return this.artistaService.findById(id);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Artista[]> {
    return this.artistaService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() artista: Artista): Promise<Artista> {
    return this.artistaService.create(artista);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() artista: Artista): Promise<Artista> {
    return this.artistaService.update(artista);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.artistaService.delete(id);
  }
}
