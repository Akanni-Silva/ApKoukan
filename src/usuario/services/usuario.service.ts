import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entities/usuario.entity';
import { ILike, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CriarUsuarioDto } from '../../dto/usuarioDto/criarUsuario.dto';
import { VerUsuarioDto } from '../../dto/usuarioDto/verUsuario.dto';
import { AtualizarUsuarioDto } from '../../dto/usuarioDto/atualizarUsuario.dto';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';

export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private bcrypt: Bcrypt,
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
  async findByUsuario(usuario: string): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({
      where: {
        email: usuario,
      },
    });
  }

  async create(usuario: CriarUsuarioDto): Promise<VerUsuarioDto> {
    const senhaCriptografada = await this.bcrypt.criptografarSenha(
      usuario.senha,
    );
    const buscaUsuario = await this.findByUsuario(usuario.email);

    if (buscaUsuario)
      throw new HttpException('O Usuario já existe!', HttpStatus.BAD_REQUEST);

    return this.usuarioRepository.save({
      ...usuario,
      senha: senhaCriptografada,
    });
  }

  async update(usuario: AtualizarUsuarioDto): Promise<VerUsuarioDto> {
    await this.findById(usuario.id);
    const buscaUsuario = await this.findByUsuario(usuario.nome);
    const senhaCriptografada = await this.bcrypt.criptografarSenha(
      usuario.senha,
    );

    if (buscaUsuario && buscaUsuario.id !== usuario.id) {
      throw new HttpException(
        'Usuário (e-mail) já Cadastrado!',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.usuarioRepository.save({
      ...usuario,
      senha: senhaCriptografada,
    });
  }
}
