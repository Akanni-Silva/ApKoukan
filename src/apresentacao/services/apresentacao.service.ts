import { InjectRepository } from '@nestjs/typeorm';
import { Apresentacao } from '../entities/apresentacao.entity';
import { ILike, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { DeleteResult } from 'typeorm/browser';
import { ArtistaService } from '../../artista/services/artista.service';
import { ApresentacaoInstrumento } from '../entities/apresentacaoInstrumento.entity';
import { ApresentacaoArtista } from '../entities/apresentacaoArtista.entity';
import { InstrumentoService } from '../../instrumento/services/instrumento.service';

import { Usuario } from '../../usuario/entities/usuario.entity';

import { AtualizarApresentacaoDto } from '../../dto/apresentacaoDTO/atualizarApresentacao.dto';
import { CriaApresentacaoDto } from '../../dto/apresentacaoDTO/criarApresentacao.dto';
import { VerApresentacaoDto } from '../../dto/apresentacaoDTO/verApresentacao.dto';

export class ApresentacaoService {
  constructor(
    @InjectRepository(Apresentacao)
    private apresentacaoRepository: Repository<Apresentacao>,
    @InjectRepository(ApresentacaoInstrumento)
    private apreInstRepository: Repository<ApresentacaoInstrumento>,
    @InjectRepository(ApresentacaoArtista)
    private apreArtRepository: Repository<ApresentacaoArtista>,

    private artistaService: ArtistaService,
    private instrumentoService: InstrumentoService,
  ) {}

  async create(dto: CriaApresentacaoDto): Promise<VerApresentacaoDto> {
    const apresentacao = new Apresentacao();
    apresentacao.musica = dto.musica;
    apresentacao.usuario = { id: dto.userId } as Usuario;

    const novaApresentacao =
      await this.apresentacaoRepository.save(apresentacao);

    for (const artistaId of dto.artistasIds) {
      const artista = await this.artistaService.findById(artistaId);

      const apreArtista = new ApresentacaoArtista();
      apreArtista.artistaId = artista;
      apreArtista.apresentacaoId = novaApresentacao;

      await this.apreArtRepository.save(apreArtista);
    }

    for (const instrumentoId of dto.instrumentosIds) {
      const instrumento = await this.instrumentoService.findById(instrumentoId);

      const apreInstrumento = new ApresentacaoInstrumento();
      apreInstrumento.instrumentoId = instrumento;
      apreInstrumento.apresentacaoId = novaApresentacao;

      await this.apreInstRepository.save(apreInstrumento);
    }

    return novaApresentacao;
  }

  async findAll(): Promise<Apresentacao[]> {
    return this.apresentacaoRepository.find();
  }

  async findById(id: number): Promise<AtualizarApresentacaoDto> {
    const apresentacao = await this.apresentacaoRepository.findOne({
      where: { id },
    });
    if (!apresentacao) {
      throw new HttpException(
        'Apresentacao não encontrade',
        HttpStatus.NOT_FOUND,
      );
    }
    return apresentacao;
  }

  async findByNome(nome: string): Promise<Apresentacao[]> {
    return this.apresentacaoRepository.find({
      where: {
        musica: ILike(`%${nome}%`),
      },
    });
  }

  async update(apresentacao: AtualizarApresentacaoDto): Promise<Apresentacao> {
    await this.findById(apresentacao.id);
    return this.apresentacaoRepository.save(apresentacao);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.apresentacaoRepository.delete(id);
  }
}
