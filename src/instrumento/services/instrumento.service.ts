import { ILike, Repository } from 'typeorm';
import { Instrumento } from '../entities/instrumento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { DeleteResult } from 'typeorm/browser';

export class InstrumentoService {
  constructor(
    @InjectRepository(Instrumento)
    private instrumentoRepository: Repository<Instrumento>,
  ) {}

  async findAll(): Promise<Instrumento[]> {
    return this.instrumentoRepository.find();
  }

  async findById(id: number): Promise<Instrumento> {
    const instrumento = await this.instrumentoRepository.findOne({
      where: { id },
      relations: { apresentacoes: true },
    });
    if (!instrumento) {
      throw new HttpException(
        'Instrumento não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
    return instrumento;
  }

  async findByNome(nome: string): Promise<Instrumento[]> {
    return this.instrumentoRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async create(instrumento: Instrumento): Promise<Instrumento> {
    return this.instrumentoRepository.save(instrumento);
  }

  async update(instrumento: Instrumento): Promise<Instrumento> {
    await this.findById(instrumento.id);
    return this.instrumentoRepository.save(instrumento);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.instrumentoRepository.delete(id);
  }
}
