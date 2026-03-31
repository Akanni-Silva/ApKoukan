import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
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
  @JoinTable({
    name: 'tb_apresentacao_artista',
    joinColumn: { name: 'apresentacao_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'artista_id', referencedColumnName: 'id' },
  })
  artistas: Artista[];

  @ManyToMany(() => Instrumento, (instrumento) => instrumento.apresentacoes)
  @JoinTable({
    name: 'tb_apresentacao_instrumento',
    joinColumn: { name: 'apresentacao_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'instrumento_id', referencedColumnName: 'id' },
  })
  instrumentos: Instrumento[];

  @ManyToOne(() => Usuario, (usuario) => usuario.concertos)
  usuario: Usuario;
}
