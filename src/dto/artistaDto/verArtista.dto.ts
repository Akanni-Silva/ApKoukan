import { ApiProperty } from '@nestjs/swagger';
import { ApresentacaoArtista } from '../../apresentacao/entities/apresentacaoArtista.entity';

export class verArtistaDto {
  @ApiProperty()
  readonly nome: string;
  @ApiProperty()
  readonly posicao: number;
  @ApiProperty()
  readonly apresentacoes: ApresentacaoArtista[];
}
