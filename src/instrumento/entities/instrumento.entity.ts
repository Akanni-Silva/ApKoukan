import { Entity, OneToMany } from 'typeorm';
import { Tocador } from '../../tocador/entities/tocador.entity';
import { ApresentacaoInstrumento } from '../../apresentacao/entities/apresentacaoInstrumento.entity';

@Entity('tb_instrumento')
export class Instrumento extends Tocador {
  @OneToMany(
    () => ApresentacaoInstrumento,
    (apresentacaoInstrumento) => apresentacaoInstrumento.instrumentoId,
  )
  apresentacoes: ApresentacaoInstrumento[];
}
