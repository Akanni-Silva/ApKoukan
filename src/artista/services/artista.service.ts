import { InjectRepository } from '@nestjs/typeorm';
import { Artista } from './../entities/artista.entity';
import { ILike, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { DeleteResult } from 'typeorm/browser';
import { criarArtistaDto } from '../../dto/artistaDto/criarArtista.dto';
import { atualizarArtistaDto } from '../../dto/artistaDto/atualizarArtista.dto';
export class ArtistaService {
  constructor(
    @InjectRepository(Artista)
    private artistaRepository: Repository<Artista>,
  ) {}

  async findAll(): Promise<Artista[]> {
    return this.artistaRepository.find();
  }

  async findById(id: number): Promise<atualizarArtistaDto> {
    const artista = await this.artistaRepository.findOne({
      where: { id },
      relations: { apresentacoes: true },
    });
    if (!artista) {
      throw new HttpException('Artista não encontrade', HttpStatus.NOT_FOUND);
    }
    return artista;
  }

  async findByNome(nome: string): Promise<Artista[]> {
    return this.artistaRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async create(artista: criarArtistaDto): Promise<Artista> {
    return this.artistaRepository.save(artista);
  }

  async update(artista: atualizarArtistaDto): Promise<Artista> {
    await this.findById(artista.id);
    return this.artistaRepository.save(artista);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.artistaRepository.delete(id);
  }
}
