import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Artista } from '../../artista/entities/artista.entity';
import { Instrumento } from '../../instrumento/entities/instrumento.entity';
import { IsNotEmpty } from 'class-validator';

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
}
