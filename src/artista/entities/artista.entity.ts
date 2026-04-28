import { Entity, OneToMany } from 'typeorm';
import { Tocador } from '../../tocador/entities/tocador.entity';

import { ApresentacaoArtista } from '../../apresentacao/entities/apresentacaoArtista.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tb_artista')
export class Artista extends Tocador {
  @ApiProperty()
  @OneToMany(
    () => ApresentacaoArtista,
    (apresentacaoArtista) => apresentacaoArtista.artistaId,
  )
  apresentacoes: ApresentacaoArtista[];
}
