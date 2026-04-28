import { Expose } from 'class-transformer';
import { Apresentacao } from '../../apresentacao/entities/apresentacao.entity';
import { ApiProperty } from '@nestjs/swagger';

export class VerUsuarioDto {
  @Expose()
  @ApiProperty()
  readonly nome: string;
  @Expose()
  @ApiProperty()
  readonly foto?: string;
  @Expose()
  @ApiProperty()
  readonly concertos: Apresentacao[];
}
