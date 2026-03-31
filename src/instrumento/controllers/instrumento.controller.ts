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
import { InstrumentoService } from '../services/instrumento.service';
import { Instrumento } from '../entities/instrumento.entity';

@Controller('/instrumento')
export class InstrumentoController {
  constructor(private readonly instrumentoService: InstrumentoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Instrumento[]> {
    return this.instrumentoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Instrumento> {
    return this.instrumentoService.findById(id);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Instrumento[]> {
    return this.instrumentoService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() instrmento: Instrumento): Promise<Instrumento> {
    return this.instrumentoService.create(instrmento);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() instrumento: Instrumento): Promise<Instrumento> {
    return this.instrumentoService.update(instrumento);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.instrumentoService.delete(id);
  }
}
