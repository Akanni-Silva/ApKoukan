import { ApiProperty } from '@nestjs/swagger';
import { ApresentacaoArtista } from '../../apresentacao/entities/apresentacaoArtista.entity';

export class atualizarArtistaDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly nome: string;
  @ApiProperty()
  readonly posicao: number;
  @ApiProperty()
  readonly apresentacoes: ApresentacaoArtista[];
}
