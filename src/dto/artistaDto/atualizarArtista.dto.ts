import { ApresentacaoArtista } from '../../apresentacao/entities/apresentacaoArtista.entity';

export class atualizarArtistaDto {
  readonly id: number;
  readonly nome: string;
  readonly posicao: number;
  readonly apresentacoes: ApresentacaoArtista[];
}
