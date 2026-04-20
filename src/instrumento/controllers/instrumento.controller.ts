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
import { VerInstrumentoDto } from '../../dto/instrumentoDto/verInstrumento.dto';
import { AtualizarInstrumentoDto } from '../../dto/instrumentoDto/atualizarInstrumento.dto';
import { CriarInstrumentoDto } from '../../dto/instrumentoDto/createInstrumento.dto';

@Controller('/instrumento')
export class InstrumentoController {
  constructor(private readonly instrumentoService: InstrumentoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<VerInstrumentoDto[]> {
    return this.instrumentoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<VerInstrumentoDto> {
    return this.instrumentoService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<VerInstrumentoDto[]> {
    return this.instrumentoService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() instrumento: CriarInstrumentoDto): Promise<VerInstrumentoDto> {
    return this.instrumentoService.create(instrumento);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(
    @Body() instrumento: AtualizarInstrumentoDto,
  ): Promise<VerInstrumentoDto> {
    return this.instrumentoService.update(instrumento);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.instrumentoService.delete(id);
  }
}
