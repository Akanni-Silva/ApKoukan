import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entities/usuario.entity';
import { ILike, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CriarUsuarioDto } from '../../dto/usuarioDto/criarUsuario.dto';
import { VerUsuarioDto } from '../../dto/usuarioDto/verUsuario.dto';
import { AtualizarUsuarioDto } from '../../dto/usuarioDto/atualizarUsuario.dto';

export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<VerUsuarioDto[]> {
    return this.usuarioRepository.find();
  }

  async findById(id: number): Promise<VerUsuarioDto> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: { concertos: true },
    });
    if (!usuario) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
    return usuario;
  }

  async findByNome(nome: string): Promise<VerUsuarioDto[]> {
    return this.usuarioRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async create(usuario: CriarUsuarioDto): Promise<VerUsuarioDto> {
    return this.usuarioRepository.save(usuario);
  }

  async update(usuario: AtualizarUsuarioDto): Promise<VerUsuarioDto> {
    await this.findById(usuario.id);
    return this.usuarioRepository.save(usuario);
  }
}
