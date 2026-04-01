import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Instrumento } from '../../instrumento/entities/instrumento.entity';
import { Apresentacao } from './apresentacao.entity';

@Entity('tb_apresentacao_instrumento')
export class ApresentacaoInstrumento {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Instrumento, (instrumento) => instrumento.apresentacoes, {
    onDelete: 'CASCADE',
  })
  instrumentoId: Instrumento;

  @ManyToOne(() => Apresentacao, (apresentacao) => apresentacao.instrumentos, {
    onDelete: 'CASCADE',
  })
  apresentacaoId: Apresentacao;
}
