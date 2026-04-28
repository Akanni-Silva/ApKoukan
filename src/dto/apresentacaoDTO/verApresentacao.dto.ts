import { ApiProperty } from '@nestjs/swagger';
import { ApresentacaoArtista } from '../../apresentacao/entities/apresentacaoArtista.entity';
import { ApresentacaoInstrumento } from '../../apresentacao/entities/apresentacaoInstrumento.entity';

export class VerApresentacaoDto {
  @ApiProperty()
  readonly musica: string;
  @ApiProperty()
  readonly artistasIds?: ApresentacaoArtista[];
  @ApiProperty()
  readonly instrumentosIds?: ApresentacaoInstrumento[];
}
