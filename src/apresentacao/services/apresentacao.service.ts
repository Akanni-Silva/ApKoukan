import { InjectRepository } from '@nestjs/typeorm';
import { Apresentacao } from '../entities/apresentacao.entity';
import { ILike, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { DeleteResult } from 'typeorm/browser';
import { ArtistaService } from '../../artista/services/artista.service';
import { ApresentacaoInstrumento } from '../entities/apresentacaoInstrumento.entity';
import { ApresentacaoArtista } from '../entities/apresentacaoArtista.entity';
import { InstrumentoService } from '../../instrumento/services/instrumento.service';
import { CreateApresentacaoDto } from '../dtos/create-apresentacao.dto';

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

  async create(
    createApresentacaoDto: CreateApresentacaoDto,
  ): Promise<Apresentacao> {
    const { musica, artistasIds, instrumentosIds } = createApresentacaoDto;

    const apresentacao = new Apresentacao();
    apresentacao.musica = musica;

    const savedApresentacao =
      await this.apresentacaoRepository.save(apresentacao);

    for (const artistaId of artistasIds) {
      const artista = await this.artistaService.findById(artistaId);
      const apresentacaoArtista = new ApresentacaoArtista();
      apresentacaoArtista.artistaId = artista;
      apresentacaoArtista.apresentacaoId = savedApresentacao;
      await this.apreArtRepository.save(apresentacaoArtista);
    }

    for (const instrumentoId of instrumentosIds) {
      const instrumento = await this.instrumentoService.findById(instrumentoId);
      const apresentacaoInstrumento = new ApresentacaoInstrumento();
      apresentacaoInstrumento.instrumentoId = instrumento;
      apresentacaoInstrumento.apresentacaoId = savedApresentacao;
      await this.apreInstRepository.save(apresentacaoInstrumento);
    }

    return savedApresentacao;
  }

  async findAll(): Promise<Apresentacao[]> {
    return this.apresentacaoRepository.find();
  }

  async findById(id: number): Promise<Apresentacao> {
    const apresentacao = await this.apresentacaoRepository.findOne({
      where: {
        id,
      },
      relations: { artistas: true, instrumentos: true },
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

  async update(apresentacao: Apresentacao): Promise<Apresentacao> {
    await this.findById(apresentacao.id);
    return this.apresentacaoRepository.save(apresentacao);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.apresentacaoRepository.delete(id);
  }
}
