import { Entity, ManyToMany } from 'typeorm';
import { Tocador } from '../../tocador/entities/tocador.entity';
import { Apresentacao } from '../../apresentacao/entities/apresentacao.entity';

@Entity('tb_instrumento')
export class Instrumento extends Tocador {
  @ManyToMany(() => Apresentacao, (apresentacao) => apresentacao.instrumentos)
  apresentacoes: Apresentacao[];
}
