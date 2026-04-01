import { ApresentacaoArtista } from './apresentacaoArtista.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { IsNotEmpty } from 'class-validator';
import { ApresentacaoInstrumento } from './apresentacaoInstrumento.entity';

@Entity('tb_apresentacao')
export class Apresentacao {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  musica: string;

  @OneToMany(
    () => ApresentacaoArtista,
    (apresentacaoArtista) => apresentacaoArtista.apresentacaoId,
  )
  artistas: ApresentacaoArtista[];

  @OneToMany(
    () => ApresentacaoInstrumento,
    (apresentacaoInstrumento) => apresentacaoInstrumento.apresentacaoId,
  )
  instrumentos: ApresentacaoInstrumento[];
}
