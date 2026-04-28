import { ApiProperty } from '@nestjs/swagger';
import { ApresentacaoInstrumento } from '../../apresentacao/entities/apresentacaoInstrumento.entity';

export class VerInstrumentoDto {
  @ApiProperty()
  readonly nome: string;
  @ApiProperty()
  readonly posicao: number;
  @ApiProperty()
  readonly apresentacoes: ApresentacaoInstrumento[];
}
