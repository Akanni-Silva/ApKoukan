import { ApresentacaoInstrumento } from '../../apresentacao/entities/apresentacaoInstrumento.entity';

export class AtualizarInstrumentoDto {
  readonly id: number;
  readonly nome: string;
  readonly posicao: number;
  readonly apresentacoes: ApresentacaoInstrumento[];
}
