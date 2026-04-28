import { Entity, OneToMany } from 'typeorm';
import { Tocador } from '../../tocador/entities/tocador.entity';
import { ApresentacaoInstrumento } from '../../apresentacao/entities/apresentacaoInstrumento.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tb_instrumento')
export class Instrumento extends Tocador {
  
  @OneToMany(
    () => ApresentacaoInstrumento,
    (apresentacaoInstrumento) => apresentacaoInstrumento.instrumentoId,
  )
  apresentacoes: ApresentacaoInstrumento[];
}
