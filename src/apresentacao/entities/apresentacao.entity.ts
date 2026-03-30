import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Artista } from '../../artista/entities/artista.entity';
import { Instrumento } from '../../instrumento/entities/instrumento.entity';
import { IsNotEmpty } from 'class-validator';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('tb_apresentacao')
export class Apresentacao {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  musica: string;

  @ManyToMany(() => Artista, (artista) => artista.apresentacoes)
  artistas: Artista[];

  @ManyToMany(() => Instrumento, (instrumento) => instrumento.apresentacoes)
  instrumentos: Instrumento[];

  @ManyToOne(() => Usuario, (usuario) => usuario.concertos)
  usuario: Usuario;
}
