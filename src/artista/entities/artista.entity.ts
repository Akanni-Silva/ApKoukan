import { Entity, ManyToMany } from 'typeorm';
import { Tocador } from '../../tocador/entities/tocador.entity';
import { Apresentacao } from '../../apresentacao/entities/apresentacao.entity';

@Entity('tb_artista')
export class Artista extends Tocador {
  @ManyToMany(() => Apresentacao, (apresentacao) => apresentacao.artistas)
  apresentacoes: Apresentacao[];
}
