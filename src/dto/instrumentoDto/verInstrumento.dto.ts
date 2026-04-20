import { ApresentacaoInstrumento } from '../../apresentacao/entities/apresentacaoInstrumento.entity';

export class VerInstrumentoDto {
  readonly nome: string;
  readonly posicao: number;
  readonly apresentacoes: ApresentacaoInstrumento[];
}
