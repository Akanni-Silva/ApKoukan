import { ApiProperty } from '@nestjs/swagger';
import { ApresentacaoInstrumento } from '../../apresentacao/entities/apresentacaoInstrumento.entity';

export class AtualizarInstrumentoDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly nome: string;
  @ApiProperty()
  readonly posicao: number;
  @ApiProperty()
  readonly apresentacoes: ApresentacaoInstrumento[];
}
