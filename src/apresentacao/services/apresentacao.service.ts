import { InjectRepository } from '@nestjs/typeorm';
import { Apresentacao } from '../entities/apresentacao.entity';
import { ILike, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { DeleteResult } from 'typeorm/browser';

export class ApresentacaoService {
  constructor(
    @InjectRepository(Apresentacao)
    private apresentacaoRepository: Repository<Apresentacao>,
  ) {}

  async create(apresentacao: Apresentacao): Promise<Apresentacao> {
    return this.apresentacaoRepository.save(apresentacao);
  }

  async findAll(): Promise<Apresentacao[]> {
    return this.apresentacaoRepository.find();
  }

  async findById(id: number): Promise<Apresentacao> {
    const apresentacao = await this.apresentacaoRepository.findOneBy({ id });
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
