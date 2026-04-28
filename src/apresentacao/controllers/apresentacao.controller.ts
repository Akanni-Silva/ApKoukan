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
import { ApresentacaoService } from '../services/apresentacao.service';
import { plainToInstance } from 'class-transformer';
import { VerApresentacaoDto } from '../../dto/apresentacaoDTO/verApresentacao.dto';
import { CriaApresentacaoDto } from '../../dto/apresentacaoDTO/criarApresentacao.dto';
import { AtualizarApresentacaoDto } from '../../dto/apresentacaoDTO/atualizarApresentacao.dto';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('Apresentacao')
@ApiBearerAuth()
@Controller('/apresentacao')
export class ApresentacaoController {
  constructor(private readonly apresentacaoService: ApresentacaoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<VerApresentacaoDto[]> {
    return this.apresentacaoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<VerApresentacaoDto> {
    return this.apresentacaoService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<VerApresentacaoDto[]> {
    return this.apresentacaoService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createApresentacaoDto: CriaApresentacaoDto,
  ): Promise<VerApresentacaoDto> {
    const apresentacao = await this.apresentacaoService.create(
      createApresentacaoDto,
    );
    return plainToInstance(VerApresentacaoDto, apresentacao);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(
    @Body() apresentacao: AtualizarApresentacaoDto,
  ): Promise<VerApresentacaoDto> {
    return this.apresentacaoService.update(apresentacao);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.apresentacaoService.delete(id);
  }
}
