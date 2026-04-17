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
import { ApresentacaoService } from '../services/apresentacao.service';
import { Apresentacao } from '../entities/apresentacao.entity';
import { ApresentacaoDto } from '../../dto/apresentacaoDTO/apresentacaoDto.dto';
import { plainToInstance } from 'class-transformer';

@Controller('/apresentacao')
export class ApresentacaoController {
  constructor(private readonly apresentacaoService: ApresentacaoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<ApresentacaoDto[]> {
    const apresentacoes = await this.apresentacaoService.findAll();

    return plainToInstance(ApresentacaoDto, apresentacoes, {
      excludeExtraneousValues: true,
    });
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Apresentacao> {
    return this.apresentacaoService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Apresentacao[]> {
    return this.apresentacaoService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createApresentacaoDto: ApresentacaoDto,
  ): Promise<ApresentacaoDto> {
    const apresentacao = await this.apresentacaoService.create(
      createApresentacaoDto,
    );

    return plainToInstance(ApresentacaoDto, apresentacao, {
      excludeExtraneousValues: true,
    });
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() apresentacao: Apresentacao): Promise<Apresentacao> {
    return this.apresentacaoService.update(apresentacao);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.apresentacaoService.delete(id);
  }
}
