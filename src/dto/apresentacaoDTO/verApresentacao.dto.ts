import { ApresentacaoArtista } from '../../apresentacao/entities/apresentacaoArtista.entity';
import { ApresentacaoInstrumento } from '../../apresentacao/entities/apresentacaoInstrumento.entity';

export class VerApresentacaoDto {
  readonly musica: string;
  readonly artistasIds?: ApresentacaoArtista[];
  readonly instrumentosIds?: ApresentacaoInstrumento[];
}
