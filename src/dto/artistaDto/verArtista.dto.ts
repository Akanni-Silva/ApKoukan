import { ApresentacaoArtista } from '../../apresentacao/entities/apresentacaoArtista.entity';

export class verArtistaDto {
  readonly nome: string;
  readonly posicao: number;
  readonly apresentacoes: ApresentacaoArtista[];
}
