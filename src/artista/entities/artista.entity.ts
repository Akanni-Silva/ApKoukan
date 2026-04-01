import { Entity, OneToMany } from 'typeorm';
import { Tocador } from '../../tocador/entities/tocador.entity';

import { ApresentacaoArtista } from '../../apresentacao/entities/apresentacaoArtista.entity';

@Entity('tb_artista')
export class Artista extends Tocador {
  @OneToMany(
    () => ApresentacaoArtista,
    (apresentacaoArtista) => apresentacaoArtista.artistaId,
  )
  apresentacoes: ApresentacaoArtista[];
}
